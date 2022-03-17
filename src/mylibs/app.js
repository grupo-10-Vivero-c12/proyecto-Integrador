require('dotenv').config();
const nodemailer = require('nodemailer')
var  hbs = require( 'nodemailer-express-handlebars' ) ;
let path = require('path')

async function main(remitent, name, surname, url){

    let transporter = nodemailer.createTransport({
        // host: "smtp.gmail.com",
        // port: 465,
        // secure: true, 
        service : 'gmail',
        auth: {
          user: process.env.EMAIL, 
          pass: process.env.PASSWORD_EMAIL, 
        }, 
      });

    transporter.use('compile', hbs({
        viewEngine : 'express-handlebars',
        viewPath : './'
    }));
    transporter.verify()
    .then(() =>{
        console.log('ready for send emails')
    })


            

    var message = {
        from : `"Vivero Timbo" <${process.env.EMAIL}>`,
        to : remitent,
        subject : "registro",
        template : 'main',
        context: {
          nombre: `${name} ${surname}`,
          redirect : `${url}/users/login`
      } 
    }
    let info = await transporter.sendMail(message)

    console.log("Message sent: %s", info.messageId)
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
}


module.exports = main
