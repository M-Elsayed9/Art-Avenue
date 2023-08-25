const Joi = require('joi');

module.exports.productSchema = Joi.object({
    product: Joi.object({
        user: Joi.string().required(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
        category: Joi.string().required()
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        body: Joi.string().required()
    }).required()
})