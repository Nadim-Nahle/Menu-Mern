const mongoose = require("mongoose");

const options = {
    separator: '-',
    lang: 'en',
    truncate: 120
};

Mongoose.plugin(slug, options);

//category SCHEMA
const CategorySchema = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto: true
    },
    name: {
        type: String,
        trim: true
    },
    slug: {
        type: String,
        slug: 'name',
        unique: true
    },
    image: {

    },
    description: {
        type: String,
        trim: true
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});

//EXPORTING SCHEMA
module.exports = mongoose.model("Category", CategorySchema);
