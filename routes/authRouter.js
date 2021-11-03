const Router = require('express')
const AuthController = require('../controllers/AuthController')
const router = new Router()


router.post('/register',AuthController.registration)

//login
router.post('/login', AuthController.login)

router.get('/logout', AuthController.logout)





module.exports = router
