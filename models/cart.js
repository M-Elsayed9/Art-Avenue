const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
            quantity: Number
        }
    ],
});

module.exports = mongoose.model('cart', cartSchema);