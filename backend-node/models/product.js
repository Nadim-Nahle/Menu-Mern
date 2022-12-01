const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const { Schema } = mongoose;

const options = {
    separator: '-',
    lang: 'en',
    truncate: 120
};

mongoose.plugin(slug, options);

// Product Schema
const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    slug: {
        type: String,
        slug: 'name',
        unique: true
    },
    imageUrl: {
        type: String
    },
    imageKey: {
        type: String
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);