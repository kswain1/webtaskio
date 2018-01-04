var nodemailer = require('nodemailer'); 

function data() {

          sendEmail();
          
          function sendEmail(){
          var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
          user: 'kehlinswain@gmail.com',
              pass: 'Yadigg1345!'
          }
          });

          var mailOptions = {
          from: 'kehlinswain@gmail.com',
          to: 'kehlinswain@gmail.com',
          subject: 'Sending Email using Node.js',
          text: 'That was easy!'
          };

          transporter.sendMail(mailOptions, function(error, info){
          if (error) {
          console.log(error);
          } else {
          console.log('Email sent: ' + info.response);
          }
          });
        }
}

data();

