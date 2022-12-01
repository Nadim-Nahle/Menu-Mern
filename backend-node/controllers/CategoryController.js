const Category = require("../models/category");
const fs = require('fs');
const slugify = require('slugify');

//ADD CATEGORY CONTROLLER
async function addCategory(req, res) {
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }
    if (req.body.parentId) {
        categoryObj.parentId = req.body.parentId;
    }
    const category = new Category(categoryObj);
    try {
        await category.save();
        res.status(201).send(category);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    addCategory,
};