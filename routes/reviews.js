const express = require('express');
const router = express.Router({ mergeParams: true });

const Product = require('../models/product');
const Review = require('../models/review');

const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');

const { reviewSchema } = require('../schemas.js');

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

router.post('/', validateReview, catchAsync(async (req, res) => {
    const products = await Product.findById(req.params.id);
    const review = new Review(req.body.review);
    products.reviews.push(review);
    await review.save();
    await products.save();
    res.redirect(`/artwork/${products._id}`)
}));

router.delete('/:reviewId', catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Product.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/artwork/${id}`);
}));

module.exports = router;