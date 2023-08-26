const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const { isLoggedIn, isOwner, validateProduct } = require("../middleware");
const Product = require("../models/product");

router.get(
  "/",
  catchAsync(async (req, res) => {
    const products = await Product.find();
    res.render("artwork/index", { products: products });
  })
);

router.get("/new", isLoggedIn, (req, res) => {
  res.render("artwork/new");
});

router.post(
  "/",
  isLoggedIn,
  validateProduct,
  catchAsync(async (req, res, next) => {
    const products = new Product(req.body.product);
    products.user = req.user._id;
    await products.save();
    req.flash("success", "Successfully added!");
    res.redirect(`/artwork/${products._id}`);
  })
);

router.get(
  "/:id",
  catchAsync(async (req, res) => {
    const products = await Product.findById(req.params.id)
      .populate({
        path: "reviews",
        populate: {
          path: "author",
        },
      })
      .populate("user");
    console.log(products);
    if (!products) {
      req.flash("error", "Cannot find that piece!");
      return res.redirect("/artwork");
    }
    res.render("artwork/show", { products });
  })
);

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const products = await Product.findById(id);
    if (!products) {
      req.flash("error", "Cannot find that piece!");
      return res.redirect("/artwork");
    }
    res.render("artwork/edit", { products });
  })
);

router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateProduct,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const products = await Product.findByIdAndUpdate(id, {
      ...req.body.product,
    });
    req.flash("success", "Successfully updated!");
    res.redirect(`/artwork/${products._id}`);
  })
);

router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    req.flash("success", "Successfully deleted!");
    res.redirect("/artwork");
  })
);

module.exports = router;
