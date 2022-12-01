const { all } = require("../app/routes");
const Product = require("../models/product");
const fs = require('fs');

//ADD Product CONTROLLER
async function addProduct(req, res) {
    const product = new Product({ ...req.body });
    try {
        await movie.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

//GET PRODUCT CONTROLLER
async function getProduct(req, res) {
    try {
        const product = await Product.find({ all });
        if (!product) {
            return res.status(404).send();
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error.message);

    }
}
module.exports = {
    addProduct,
    getProduct
};