const mongoose = require("mongoose");
const User = require("../models/user");
const Product = require("../models/product");
const mockProducts = require("./products");
//const mockUsers = require('./users');

mongoose.connect("mongodb://127.0.0.1:27017/ArtAvenue-DB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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

    const insertedProducts = await Product.insertMany(mockProducts);
    console.log("Products added:", insertedProducts);
  } catch (e) {
    console.log("Error:", e);
  } finally {
    mongoose.connection.close();
  }
};

insertData();
// Run this file with node seeds/index.js
