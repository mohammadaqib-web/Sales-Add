// Importing necessary modules
const mongoose = require('mongoose');

// Creating a Mongoose schema for the 'User' model
const Schema = mongoose.Schema;

// Defining the user schema with required fields (firstName, lastName, email, password)
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true }); // Including timestamps for createdAt and updatedAt

// Creating a Mongoose model for the 'User' schema
const UserModel = mongoose.model('UserModel', userSchema);

// Exporting the user model for use in other parts of the application
module.exports = UserModel;
