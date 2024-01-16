const dotenv = require('dotenv');
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { senderName, email, message } = req.body;

  // Configure the nodemailer transporter with your email server settings
  const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: process.env.SENDER_PORT,
    secure: false,
    service: process.env.SENDER_SERVICE,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
    debug: true,
    logger: true,
  });

  // Email content
  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: process.env.DESTINATION_EMAIL,
    subject: 'New Contact Form Submission',
    text: `Name: ${senderName}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
