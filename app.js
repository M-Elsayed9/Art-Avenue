const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const user = require('./models/user');
const product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/ArtAvenue-DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/users', async (req, res) => {
     const users = await user.find();
        res.render('users/index', { users: users });
});

app.get('/artwork', async (req, res) => { 
    const products = await product.find();
    res.render('artwork/index', { products: products });
});

app.get('/artwork/new', async (req, res) => {
    res.render('artwork/new');
});

app.get('/artwork/:id', async (req, res) => { 
    const products = await product.findById(req.params.id);
    res.render('artwork/show', { products: products });
});





app.listen(3000, () => {
  console.log('Server is running on port 3000');
});