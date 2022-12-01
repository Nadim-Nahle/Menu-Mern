const mongoose = require("mongoose");

//category SCHEMA
const CategorySchema = new Schema({

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
        trim: true
    },
    parentId: {
        type: String,
    },

    created: {
        type: Date,
        default: Date.now
    }
});

//EXPORTING SCHEMA
module.exports = mongoose.model("Category", CategorySchema);
