// Imports the check function from the express validator library 
const { check } = require('express-validator');

// Exports a validation middleware for signup requests
exports.signupValidation = [

// Checks that the name field is not empty
check('name', 'Name is requied').not().isEmpty(),

//Checks that the email is valid, and removes dots from gmail
check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),

//Checks is the password has 6 or more characters
check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]

////Server.js File

// Imports necessary modules and libraries
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

//Imports validation functions we created earlier
const { signupValidation, loginValidation } = require('./validation.js');

//Creating an instance of an express application 
const app = express();

// Using express to handle JSON requests
app.use(express.json());

// Using express to to parse JSON data
app.use(bodyParser.json());

// Using express to parse URL encoded data 
app.use(bodyParser.urlencoded({
    extended: true
 }));
 
 //Enabling cross origin resource sharing
 app.use(cors());

 ///Defining a route for the root URL 
 app.get('/', (req, res) => {
    res.send('Node js file upload rest apis');
 });

 //Defining a route for the '/register' URL, and apply signupVallidation middle ware
 app.post('/register', signupValidation, (req, res, next) => {
    // your registration code
  });
  
// Defining a route for the '/login' URL, and applying loginValidation middleware
  app.post('/login', loginValidation, (req, res, next) => {
    // your login code
  });
  
  // Handling Errors
app.use((err, req, res, next) => {

 // Making the status code 500
   err.statusCode = err.statusCode || 500;

   // Setting the error message to Internal Server
   err.message = err.message || "Internal Server Error";

   // This sends the status code and message as a JSON reponse 
   res.status(err.statusCode).json({
     message: err.message,
   });
});

// Starting the serer and listening on port 3000
app.listen(3000,() => console.log('Server is running on port 3000'))