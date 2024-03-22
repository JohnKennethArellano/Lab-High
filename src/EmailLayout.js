import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'zaki.creations29@gmail.com', // Sender Gmail add. Here
    pass: 'buaw cwlv gtbx ffog', // App Password from Gmail Account
  },
});

  const mailOptions = {
    from: {
      name: 'Bulsu Labhigh',
      address: 'randomdesign@gmail.com',
    },
    to: 'kyrios1401@gmail.com',
    subject:'Reset Password',
    html:`<p>Reset your password</p>`,
  }

  const sendMail = async (transporter,mailOptions) => {
    try{
      await transporter.sendMail(mailOptions)
      console.log('Email has been sent!')
    }
    catch (error){
      console.error(error)
    }
  }

  sendMail(transporter,mailOptions);