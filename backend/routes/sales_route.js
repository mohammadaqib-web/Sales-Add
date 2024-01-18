// Importing necessary modules
const express = require('express');
const { addSales, topSalesToday, totalRevenue } = require('../controllers/sales_controller'); // Assuming sales controller functions are defined
const authenticate = require('../middlewares/protectedRoute'); // Assuming middleware for authentication is defined

// Creating an Express router instance
const router = express.Router();

// Route for adding sales, protected by authentication middleware
router.post('/addSales', authenticate, addSales);

// Route for retrieving today's top sales, protected by authentication middleware
router.get('/topSales', authenticate, topSalesToday);

// Route for retrieving total revenue, protected by authentication middleware
router.get('/totalRevenue', authenticate, totalRevenue);

// Exporting the router for use in other parts of the application
module.exports = router;
