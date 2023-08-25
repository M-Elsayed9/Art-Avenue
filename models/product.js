const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    user: String,
    title: String,
    description: String,
    image: String,
    category: String,
    // other relevant fields...
});

module.exports = mongoose.model('product', productSchema);