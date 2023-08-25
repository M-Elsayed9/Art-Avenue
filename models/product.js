const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    user: String,
    title: String,
    description: String,
    image: String,
    category: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});
productSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.remove({
        _id: {
            $in: doc.reviews
        }
        })
    }
})

module.exports = mongoose.model('product', productSchema);