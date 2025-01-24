
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route to handle form submission
app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Nodemailer transport setup
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Using Gmail as the service
    auth: {
      user: 'sp23-bse-007@cuilahore.edu.pk', // Your email
      pass: '', // Replace with your email password or app password
    },
  });

  const mailOptions = {
    from: 'abdullah312003@gmail.com', // Sender email (your email)
    to: 'abdullah312003@gmail.com', // Receiver email (your email)
    subject: 'New Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Failed to send email.' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
