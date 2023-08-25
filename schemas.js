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