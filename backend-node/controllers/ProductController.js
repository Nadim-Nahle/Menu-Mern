const { all } = require("../app/routes");
const Product = require("../models/product");
const fs = require('fs');
const slugify = require('slugify');
const Category = require("../models/category");

//ADD Product CONTROLLER
async function addProduct(req, res) {

    try {

        const { name, description, price, category, img } = req.body;
        let picture = [];
        // if (req.files.length > 0) {
        //     picture = req.files.map(file => {
        //         return { img: file.filename }
        //     })
        // }
        const product = new Product({
            name: name,
            slug: slugify(name),
            price,
            description,
            picture,
            category,
            img
        })
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

//GET PRODUCT CONTROLLER
async function getProducts(req, res) {
    try {
        const product = await Product.find({ all });
        const category = await Category.find({ all });
        if (!product) {
            return res.status(404).send();
        }
        for (i = 0; i < category.length; i++) {
            for (j = 0; j < product.length; j++) {
                if (category[i]._id.toString() == product[j].category.toString()) {
                    product[j].categoryName = category[i].name
                }
            }

        }
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error.message);

    }
}

//UPDATE PRODUCT CONTROLLER
async function updateProduct(req, res) {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send();
        }
        Object.assign(product, req.body)
        product.save();
        res.send({ data: product });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//DELETE PRODUCT CONTROLLER
async function deleteProduct(req, res) {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send();
        }
        await product.remove();
        res.status(200).send({ data: true });
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct
};