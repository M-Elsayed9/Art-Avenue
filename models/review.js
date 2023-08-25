const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    rating: { type: Number, min: 1, max: 5 },
    text: String,
    datePosted: Date,
});

module.exports = mongoose.model('review', reviewSchema);