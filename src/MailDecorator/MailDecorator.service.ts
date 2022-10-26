import { Injectable } from '@nestjs/common';
import nodemailer = require('nodemailer');

@Injectable()
export class MailDecoratorService {

  //Codigo tomado y adaptado desde nodemailer
  async enviarcorreo(){ 
    
     const transporter = nodemailer.createTransport({
        host: "smtp.gmail.email",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'corsiucabdonotreply@gmail.com', // generated ethereal user
          pass: 'Calonzo123*', // generated ethereal password
        },
      });

      await transporter.sendMail({
        from: '"Fred Foo 👻" <corsiucabdonotreply@gmail.com>', // sender address
        to: "marcosjduque2@gmail.com", // list of receivers
        subject: "Prueba", // Subject line
        text: "Hola?", // plain text body
        html: "<b>Hola?</b>", // html body
      });

      transporter.verify().then(()=> {
        
        console.log('Ready to send');

      });
}

}
