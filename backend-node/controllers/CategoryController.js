const Category = require("../models/category");
const fs = require('fs');
const slugify = require('slugify');
const { all } = require('../app/routes')
const { createCategories } = require('../services/CategoryService')

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

//GET CATEGORIES CONTROLLER
async function getCategories(req, res) {
    try {
        const category = await Category.find(all)
        if (!category) {
            return res.status(405).send()
        }
        const categoryList = createCategories(category)
        res.status(200).json({ categoryList })
    }
    catch (error) {
        res.status(400).send(error.message);
    }

}

module.exports = {
    addCategory, getCategories
};