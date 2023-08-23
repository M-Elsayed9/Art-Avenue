const mongoose = require('mongoose');
const shippingSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    duration: String,
});

module.exports = mongoose.model('shipping', shippingSchema);