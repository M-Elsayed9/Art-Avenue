const mongoose = require('mongoose');
const User = require('../models/user');
const Product = require('../models/product');
const mockProducts = require('./products');
const mockUsers = require('./users');

mongoose.connect('mongodb://127.0.0.1:27017/ArtAvenue-DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const insertData = async () => {
    try {
        await User.deleteMany({}); // Delete all users
        await Product.deleteMany({}); // Delete all products
        // Insert users first
        const insertedUsers = await User.insertMany(mockUsers);
        console.log("Users added:", insertedUsers);

        // Map the usernames from mockProducts to their respective ObjectId from insertedUsers
        // const updatedProducts = mockProducts.map(product => {
        //     const user = insertedUsers.find(u => u.username === product.user);
        //     if (user) {
        //         product.user = user._id;
        //         return product;
        //     } else {
        //         console.error(`User not found for product: ${product.title}`);
        //         return null; // If no user is found, return null (we'll filter these out before inserting)
        //     }
        // }).filter(product => product !== null); // Filter out any null values

        // Insert products with the updated artist ObjectIds
        const insertedProducts = await Product.insertMany(mockProducts);
        console.log("Products added:", insertedProducts);

        //Update users' products field with inserted product ObjectIds
        // for (let user of insertedUsers) {
        //     const userProducts = insertedProducts.filter(p => p.user.toString() === user._id.toString());
        //     user.products = userProducts.map(p => p._id);
        //     await user.save(); // Save updated user
        // }
    } catch (e) {
        console.log("Error:", e);
    } finally {
        mongoose.connection.close();
    }
};

insertData();
// Run this file with node seeds/index.js