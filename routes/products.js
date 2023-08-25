const express = require('express');
const router = express.Router();
const { productSchema } = require('../schemas.js'); 
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const Product = require('../models/product');

const validateProduct = (req, res, next) => {
    
    const { error } = productSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

router.get('/', catchAsync(async (req, res) => { 
    const products = await Product.find();
    res.render('artwork/index', { products: products });
}));

router.get('/new', (req, res) => {
    res.render('artwork/new');
});

router.post('/',validateProduct, catchAsync(async (req, res, next) => {
    const products = new Product(req.body.product);
    await products.save();
    req.flash('success', 'Successfully added!');
    res.redirect(`/artwork/${products._id}`)
}));

router.get('/:id', catchAsync(async (req, res) => { 
    const products = await Product.findById(req.params.id).populate('reviews');
    res.render('artwork/show', { products });
}));

router.get('/:id/edit', catchAsync(async (req, res) => {  
    const products = await Product.findById(req.params.id);
    res.render('artwork/edit', { products });
}));

router.put('/:id', validateProduct, catchAsync(async (req, res) => {
    const { id } = req.params;
    const products = await Product.findByIdAndUpdate(id, { ...req.body.product });
    res.redirect(`/artwork/${products._id}`)
}));

router.delete('/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/artwork');
}));

module.exports = router;