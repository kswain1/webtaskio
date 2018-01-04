var nodemailer = require('nodemailer'); 

module.exports = function (cb) {

          sendEmail();
          
          function sendEmail(){
          var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
          user: '(YourEmail)',
              pass: '(YourPassword)'
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



