import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "33aa4061956ec7",
        pass: "f4295383c0f711"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <salve@feedget.com>',
            to: 'Aterso <athirson07@gmail.com>',
            subject,
            html: body,
        });

    };
}