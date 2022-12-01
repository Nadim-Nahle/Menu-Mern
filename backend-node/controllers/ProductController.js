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

module.exports = {
    addProduct,
};