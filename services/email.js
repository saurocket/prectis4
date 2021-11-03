const nodemailer = require("nodemailer");


const sendMail = async (req, res) => {
    try {

        const {firstName, lastName,password, email, phone, message} = req.body
        const output = `<p>You have new email 
                        <h3>Please check details</h3>
                        <ul>
                        <li>firstName: ${firstName}</li>
                        <li>lastName: ${lastName}</li>
                        <li>password: ${password}</li>
                        <li>email: ${email}</li>
                        <li>phone: ${phone}</li>
                        </ul>
                        <h3>Message</h3>
                        <p>${message}</p>
                    </p>`
        const transporter = nodemailer.createTransport({
            service: "hotmail",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'testgoit@outlook.com', // generated ethereal user
                pass: 'sauron1234sauron', // generated ethereal password
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false,
            },
        });

        const emailOptions = {
            from: 'testgoit@outlook.com', // sender address
            to: "ezsauron4@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "RegisterME", // plain text body
            html: output, // html body
        }

        const info = await transporter.sendMail(emailOptions);

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        res.render('contact', {msg: 'Форма отправлена'})



    }catch (e) {
        console.log(e.message)
    }




}
module.exports =sendMail
