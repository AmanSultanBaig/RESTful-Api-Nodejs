const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        default: 'This product is created on '+new Date().toLocaleString()
    }
})

module.exports = mongoose.model('products', productSchema)