// Importing necessary modules
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
require('./dbconnect'); // Assuming this file connects to the database

// Creating an Express application
const app = express();
dotenv.config(); // Loading environment variables from .env file
app.use(express.json()); // Allowing Express to parse JSON requests
app.use(cors()); // Enabling Cross-Origin Resource Sharing (CORS)
const PORT = process.env.PORT; // Getting the port number from environment variables

// Using routes for user-related operations
app.use('/api/v1/user', require('./routes/user_route'));

// Using routes for sales-related operations
app.use('/api/v1/sales', require('./routes/sales_route'));

// Starting the server and listening on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
