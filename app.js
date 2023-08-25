const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const { productSchema } = require('./schemas.js');      // Joi schema
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError');
const user = require('./models/user');
const Product = require('./models/product');

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

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));
app.get('/', (req, res) => {
    res.render('home');
});

const validateProduct = (req, res, next) => {
    
    const { error } = productSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

app.get('/users', catchAsync(async (req, res) => {
     const users = await user.find();
        res.render('users/index', { users: users });
}));

app.get('/artwork', catchAsync(async (req, res) => { 
    const products = await Product.find();
    res.render('artwork/index', { products: products });
}));

app.get('/artwork/new', (req, res) => {
    res.render('artwork/new');
});

app.post('/artwork',validateProduct, catchAsync(async (req, res, next) => {
    //if (!req.body.product) throw new ExpressError('Invalid Artwork Data', 400);
    const products = new Product(req.body.product);
    await products.save();
        res.redirect(`/artwork/${products._id}`)
}));

app.get('/artwork/:id', catchAsync(async (req, res) => { 
    const products = await Product.findById(req.params.id);
    res.render('artwork/show', { products});
}));

app.get('/artwork/:id/edit', catchAsync(async (req, res) => {  
    const products = await Product.findById(req.params.id);
    res.render('artwork/edit', { products });
}));

app.put('/artwork/:id', validateProduct, catchAsync(async (req, res) => {
    const { id } = req.params;
    const products = await Product.findByIdAndUpdate(id, { ...req.body.product });
    res.redirect(`/artwork/${products._id}`)
}));

app.delete('/artwork/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/artwork');
}));

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
});

app.use((err, req, res, next) => {
    if(!err.message) err.message = 'Something Went Wrong!'
    const {statusCode = 500, message = 'Something went wrong!'} = err;
    res.status(statusCode).render('error', { err });
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});