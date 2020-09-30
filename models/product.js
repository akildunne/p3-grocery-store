const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
  {
    product: { type: String, required: true },
    featured: { type: Boolean, required: true },
    imgURL: { type: String, required: true },
    imgURL2: { type: String, required: false },
    imgURL3: { type: String, required: false },
    imgURL4: { type: String, required: false },
    description: { type: String, required: true },
    price: { type: String, required: true },
    reviews: [{
      author: { type: String, required: false },
      location: { type: String, required: false },
      rating: { type: Number, required: false },
      description: { type: String, required: false },
    }]

  },
  { timestamps: true ,
  toJSON: { virtuals: true } 
  },
)
Product.virtual('rating').get(function () {
  return this.reviews.reduce((total, review) => total + review.rating, 0) / this.reviews.length
})

module.exports = mongoose.model('products', Product)