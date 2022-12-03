const Category = require("../models/category");
const fs = require('fs');
const slugify = require('slugify');
const { all } = require('../app/routes')
const { createCategories } = require('../services/CategoryService');
const Product = require("../models/product");

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
        // const categoryList = createCategories(category)
        const product = await Product.find(all)
        let p = []
        for (i = 0; i < category.length; i++) {
            for (j = 0; j < product.length; j++) {
                if (category[i]._id.toString() == product[j].category.toString()) {
                    category[i].product = product[j]
                }
            }

        }
        res.status(200).send(category)
    }
    catch (error) {
        res.status(400).send(error.message);
    }

}

//DELETE CATEGORY CONTROLLER
async function deleteCategory(req, res) {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).send();
        }
        await category.remove();
        res.status(200).send({ data: true });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addCategory, getCategories, deleteCategory
};