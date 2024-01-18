// Importing necessary modules
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config(); // Loading environment variables from .env file

// Connecting to the MongoDB database using Mongoose
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Database Connected!!"))
    .catch(() => console.log("Error while connecting to Database!"));
