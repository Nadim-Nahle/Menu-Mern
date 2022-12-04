const express = require("express");
const { addCategory, getCategories, deleteCategory } = require('../controllers/CategoryController');
const { addProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/ProductController');
const router = express.Router();
const multer = require('multer');
const shortid = require("shortid");
const path = require('path');
const auth = require("../middlewares/AuthMiddleware");
const admin = require('../middlewares/AdminMiddleware')

// ROUTES

// //PRODUCT ROUTES
router.post("/add/product", auth, admin, addProduct);
router.get("/products", getProducts);
router.delete("/delete/product/:id", auth, admin, deleteProduct);
router.patch("/product/update/:id", auth, admin, updateProduct);


// CATEGORY ROUTES
router.post("/add/category", addCategory);
router.get("/categories", getCategories);
router.delete("/delete/category/:id", deleteCategory);
// router.patch("/update/category/:id", updateCategory);



module.exports = router;
