// Importing necessary module
const SaleModel = require('../models/sales_model');

// Controller function for adding sales
const addSales = async (req, res) => {
    try {
        // Destructuring sales input from request body
        const { productName, quantity, amount } = req.body;

        // Checking if all required fields are provided
        if (!productName || !quantity || !amount) {
            return res.status(400).json({ message: "All fields are mandatory" });
        }

        // Creating a new sale instance with the author (user) information
        const newSale = new SaleModel({ productName, quantity, amount, author: req.user[0]._id });

        // Saving the new sale to the database
        const resp = await newSale.save();

        // Responding with success message and sale details
        res.status(201).json({ message: "Sales Created Successfully!", resp });
    } catch (error) {
        // Handling errors and responding with an error message
        res.status(400).json({ message: "Error Occurred!", error });
    }
}

// Controller function for fetching top sales of the day
const topSalesToday = async (req, res) => {
    const userId = req.user[0]._id;

    // Getting the start and end of the current day in UTC
    const currentDate = new Date();
    currentDate.setUTCHours(0, 0, 0, 0);
    const startOfDay = currentDate;
    const endOfDay = new Date();
    endOfDay.setUTCHours(23, 59, 59, 999);

    try {
        // Finding the top 5 sales of the user for the current day, sorted by amount in descending order
        const findSales = await SaleModel.find({ author: userId, createdAt: { $gte: startOfDay, $lte: endOfDay } }).sort({ amount: -1 }).limit(5);

        // Responding with success message and the top sales of the day
        res.status(201).json({ message: "User Sales", findSales });
    } catch (error) {
        // Handling errors and responding with an error message
        res.status(400).json({ message: "Error Occurred!", error });
    }
}

// Controller function for calculating total revenue
const totalRevenue = async (req, res) => {
    const userId = req.user[0]._id;

    try {
        // Finding all sales of the user
        const allSales = await SaleModel.find({ author: userId });

        // Calculating the total amount by summing up the amounts of all sales
        const totalAmount = allSales.reduce((sum, sale) => sum + sale.amount, 0);

        // Responding with success message and the total revenue
        res.status(201).json({ message: "Total amount", totalAmount });
    } catch (error) {
        // Handling errors and responding with an error message
        res.status(400).json({ message: "Error Occurred!", error });
    }
}

// Exporting the sales controller functions for use in other parts of the application
module.exports = {
    addSales,
    topSalesToday,
    totalRevenue
}
