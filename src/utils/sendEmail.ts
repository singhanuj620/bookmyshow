import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_EMAIL_HOST,
  port: parseInt(process.env.NEXT_PUBLIC_EMAIL_PORT!),
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USER,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
  },
});

export default async function sendEmail(
  to: string,
  subject: string,
  html: string
) {
  const info = await transport.sendMail({
    from: "admin@bookmyshowclone.com",
    to,
    subject,
    html,
  });
  console.log("Message sent: ", info.messageId);
}
