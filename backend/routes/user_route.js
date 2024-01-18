// Importing necessary modules
const express = require('express');
const { addUser, loginUser } = require('../controllers/user_controller'); // Assuming user controller functions are defined

// Creating an Express router instance
const router = express.Router();

// Route for handling user login
router.post('/login', loginUser);

// Route for handling user registration
router.post('/register', addUser);

// Exporting the router for use in other parts of the application
module.exports = router;
