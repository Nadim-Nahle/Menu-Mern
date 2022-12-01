const mongoose = require('mongoose');

// Product Schema
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        unique: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    offer: {
        type: Number
    },
    picture: [
        {
            img: { type: string }
        }
    ],
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);