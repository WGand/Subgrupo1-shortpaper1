import { Injectable } from '@nestjs/common';
import nodemailer = require('nodemailer');

@Injectable()
export class MailDecoratorService {

  //Codigo tomado y adaptado desde nodemailer
    enviarcorreo(){ 
    
     const transporter = nodemailer.createTransport({
        host: "smtp.gmail.email",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'corsiucabdonotreply@gmail.com', // generated ethereal user
          pass: 'Calonzo123*', // generated ethereal password
        },
      });
}
  
   infocorreo(){




  }

}
