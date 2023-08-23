const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: Number
        }
    ],
    totalAmount: Number,
    paymentMethod: String,
    shippingAddress: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        postalCode: String,
        country: String
    },
    status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'] },
    dateOrdered: Date,
    // other relevant fields...
});

module.exports = mongoose.model('Order', orderSchema);