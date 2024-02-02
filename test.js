
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000



function sendEmail(){
    return new Promise((resolve, reject)=>{
        var transporter = nodemailer.createTransport({
            host: 'mail.todayupdate.com.ng',
            secureConnection: true,
            port: 465,
            service: 'SMTP',
            auth:{
                user:"support@todayupdate.com.ng",
                pass:"78453722$Mm"
            },
            from:"support@todayupdate.com.ng",
        });

        const mail_option = {
            from:`Fed-Trust <support@todayupdate.com.ng>`,
            to:'queenstiles7@gmail.com',
            subject:'LOGIN ALERT!!!',
            text:'Your account was just loged in few seconds ago, if this was not you kindly change your password as soon as possible'
        }

        transporter.sendMail(mail_option, function(error, info){
            if(error){
                return reject({message:`An error has occured`})
            }
            return resolve({message:"email sentss"})
        })
    })
}

app.get('/',(req, res)=>[
      sendEmail()
      .then(respones =>res.send(respones.message))
      .catch(error => res.status(500).send(error.message))
])


app.listen(port, ()=>{
    console.log(`this project is working fine at http://localhost:${port}`)
});