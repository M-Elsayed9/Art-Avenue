const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    user: String,
    title: String,
    description: String,
    image: String,
    category: String,
    
});

module.exports = mongoose.model('product', productSchema);