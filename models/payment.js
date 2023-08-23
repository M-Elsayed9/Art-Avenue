const mongoose = require('mongoose');
const paymentSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'order' },
    transactionId: String,
    amount: Number,
    date: Date,
    status: String,
    paymentMethod: String,
});

module.exports = mongoose.model('payment', paymentSchema);