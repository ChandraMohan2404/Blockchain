const crypto = require('crypto');
function generateRandomBytes(length) {
  return crypto.randomBytes(length).toString('hex');
}
console.log('Random Bytes:', generateRandomBytes(16));
console.log('');

//2  joi using npm
const Joi = require('joi');
function validateUser(user) {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(0),
  });

  return schema.validate(user);
}

const user = { username: 'john_doe', email: 'john@example.com', age: 25 };
const validationResult = validateUser(user);

console.log('Validation Result:', validationResult);
console.log('');

/// 3  bcrypt using npm
const bcrypt = require('bcrypt');
async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

hashPassword('mySecretPassword')
  .then(hash => console.log('Hashed Password:', hash))
  .catch(error => console.error('Error hashing password:', error));
console.log('');

///4 slugify using npm
const slugify = require('slugify');
function createSlug(title) {
  const options = {
    replacement: '*',  // replace spaces with -
    remove: /[*+~.()'"!:@]/g,  // remove characters that match this regex
    lower: true,  // convert to lowercase
  };
  return slugify(title, options);
}
console.log(createSlug('This is a Sample Title'));
console.log('');

//5 nodemailer using npm
const nodemailer = require('nodemailer');
async function sendEmail(to, subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your.email@gmail.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'your.email@gmail.com',
    to,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error.message);
  }
}
// Usage
const emailTo = 'recipient@example.com';
const emailSubject = 'Test Email';
const emailText = 'This is a test email sent using Nodemailer.';
sendEmail(emailTo, emailSubject, emailText);
