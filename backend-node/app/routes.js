const express = require("express");
const { addCategory, getCategories } = require('../controllers/CategoryController');
const { addProduct, getProducts } = require('../controllers/ProductController');
const router = express.Router();
const multer = require('multer');
const shortid = require("shortid");
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

// ROUTES

// //PRODUCT ROUTES
router.post("/add/product", upload.array('picture'), addProduct);
router.get("/products", getProducts);
//router.delete("/delete/:id", auth, deleteProducts);
// router.patch("/product/update/:id", auth, updateProduct);

// CATEGORY ROUTES
router.post("/add/category", addCategory);
router.get("/categories", getCategories);



module.exports = router;
