const express = require("express");
const router = express.Router({ mergeParams: true });
const Product = require("../models/product");
const Review = require("../models/review");
const ExpressError = require("../utils/ExpressError");
const catchAsync = require("../utils/catchAsync");

const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");

router.post(
  "/",
  isLoggedIn,
  validateReview,
  catchAsync(async (req, res) => {
    const products = await Product.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    products.reviews.push(review);
    await review.save();
    await products.save();
    req.flash("success", "Created new review!");
    res.redirect(`/artwork/${products._id}`);
  })
);

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Product.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Successfully deleted review!");
    res.redirect(`/artwork/${id}`);
  })
);

module.exports = router;
