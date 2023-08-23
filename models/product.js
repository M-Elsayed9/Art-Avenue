const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: String,
    description: String,
    price: Number,
    image: String,
    category: String,
    // other relevant fields...
});

module.exports = mongoose.model('product', productSchema);