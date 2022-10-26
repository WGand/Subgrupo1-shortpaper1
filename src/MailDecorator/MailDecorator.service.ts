import { Injectable } from '@nestjs/common';
import nodemailer = require('nodemailer');

@Injectable()
export class MailDecoratorService {
  
  
    enviarcorreo(){ 
    
     const transporter = nodemailer.createTransport({
        host: "smtp.gmail.email",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'marcosjduque2@gmail.com', // generated ethereal user
          pass: '41234', // generated ethereal password
        },
      });
}
}
