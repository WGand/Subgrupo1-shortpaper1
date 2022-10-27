import { Injectable } from '@nestjs/common';
import nodemailer = require('nodemailer');

@Injectable()
export class MailDecoratorService {
  //Codigo tomado y adaptado desde nodemailer
  async enviarcorreo(email: string, message: string, subject: string) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'corsiucabdonotreply@gmail.com', // generated ethereal user
        pass: 'Calonzo123*', // generated ethereal password
      },
    });
    await transporter.sendMail({
      from: '"DoNotReply" <corsiucabdonotreply@gmail.com>', // sender address
      to: `${email}`, // list of receivers
      subject: `${subject}`, // Subject line
      text: `${message}`, // plain text body
      html: `<b>${message}</b>`, // html body
    });

    transporter.verify().then(() => {
      console.log('Ready to send');
    });
  }
}
