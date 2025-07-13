import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  createMailOptions(emailTo, pin) {
    console.log('📬 Para:', emailTo);
    console.log('🔐 PIN:', pin);

    return {
      from: process.env.MAIL_USERNAME,
      to: emailTo,
      subject: 'Validação de E-mail',
      text: `Seu código PIN é: ${pin}`,
    };
  }

  sendPinEmail(emailTo, pin) {
    const mailOptions = this.createMailOptions(emailTo, pin);

    this.transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('❌ Erro ao enviar e-mail:', err);
      } else {
        console.log('✅ E-mail enviado com sucesso:', info.response);
      }
    });
  }
}

export default new EmailService();
