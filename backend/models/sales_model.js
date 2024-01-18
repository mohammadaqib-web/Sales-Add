// Importing necessary modules
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

// Creating a Mongoose schema for the 'Sale' model
const Schema = mongoose.Schema;

// Defining the sale schema with required fields (productName, quantity, amount)
// and a reference to the User model for the 'author' field
const saleSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    author: {
        type: ObjectId,
        ref: "UserModel" // Referencing the 'UserModel' for the author field
    }
}, { timestamps: true }); // Including timestamps for createdAt and updatedAt

// Creating a Mongoose model for the 'Sale' schema
const SaleModel = mongoose.model('SaleModel', saleSchema);

// Exporting the sale model for use in other parts of the application
module.exports = SaleModel;
