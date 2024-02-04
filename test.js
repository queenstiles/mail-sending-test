const express = require('express');
var bodyParser  = require('body-parser');
const app = express();
const port = 4000
const nodemailer = require("nodemailer");
const path = require('path');





app.use(
    express.urlencoded({
      extended: true,
    })
  )

  app.use(express.json());



    const ff = path.join(__dirname, '/src')
    app.use( express.static(ff));


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/src')
});

app.post('/login.html', (request, response)=>{
   

    let info = request.body
    console.log(info.email);
   
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
            to: info.email,
            subject: info.subject,
            text: info.message
        }

        transporter.sendMail(mail_option, function(error, info){
            if(error){
                return reject({message:`An error has occured`})
            }
            return resolve({message:"email sentss"})
        })




    response.json({
     message: 'success'
    })
    
})
})


app.listen(port, ()=>{
    console.log(`this project is working fine at http://localhost:${port}`)
});