const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const User = require('./model/user')
const Role = require('./model/role')
const cors = require('cors')
const bqrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
dotenv.config({path: './config/config.env'})
const exphbs = require('express-handlebars')
//load config variables
const sendMail = require('./services/email')
const AuthController = require('./controllers/AuthController')
const authRouter = require ('./routes/authRouter')


const app = express()
app.use(cors())
//request parse JSON

//set up view engine

app.engine('handlebars',exphbs())
app.set('view engine', 'handlebars');



//Для отправки формы через Index.html
const urlencodedParser = express.urlencoded({extended: false});

//body parsers midllewares

app.use(urlencodedParser)
app.use(express.json())
app.use('/', authRouter)

app.get('/contact', (req, res) => {
    res.render('contact')
})
app.post('/send',  async (req, res)  => {
   await sendMail(req, res)
})

//register
// app.post('/register',AuthController.registration)
//
// //login
// app.post('/login', AuthController.login)
//
// app.get('/logout', AuthController.logout)

// app.post('/setrole', roleMildlewar(['ADMIN']), authController.getUserInfo)


//connect dataBase
connectDB()

const server = app.listen(process.env.PORT, () => {
    console.log('server runing on port ' + process.env.PORT)
})

process.on('unhandledRejection', (error, promice) => {
    if (error) {
        console.log(`error: ${error.message}`)
        server.close(() => process.exit(1))
    }

})

