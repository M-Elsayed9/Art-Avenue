const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true,
        lowercase: true,
    },
    password: {
    type: String,
    minLength: 8,
    },

    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        }
    ],

    
    specialty: String,
    profileImage: String,
    bio: String,
    // other relevant fields...
});

module.exports = mongoose.model('user', userSchema);