import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mailAdapter';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "79d96d8d5d99d0",
    pass: "e975fbb3460f19"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
 async sendMail({ subject, body }: SendMailData) {
  await transport.sendMail({
  from: "Equipe Feedget <oi@feedget.com>",
  to: "Luiza Campos <luiza.almcampos@gmail.com>",
  subject,
  html: body,
})
 };

}