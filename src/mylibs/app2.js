require('dotenv').config();
const nodemailer = require('nodemailer')
const handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')


module.exports = async function sendEmail(email, subject, name, surname, type, rute, token) {
  const filePath = path.join(__dirname, '/template', type);
  const source = fs.readFileSync(filePath, 'utf-8').toString();
  const template = await handlebars.compile(source);
  const replacements = {
    nombre: `${name} ${surname}`,
    redirect : token ? `/users/new-password/${token}` : rute
  };
  const htmlToSend = await template(replacements);
  const transporter = await nodemailer.createTransport({
    service : "gmail",
    auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD_EMAIL, 
    }
  });
  const mailOptions = {
    from : `"Vivero Timbo" <${process.env.EMAIL}>`,
    to: email,
    subject: subject,
    html: htmlToSend
  };
  const info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", "https://mailtrap.io/inboxes/test/messages/");

}
