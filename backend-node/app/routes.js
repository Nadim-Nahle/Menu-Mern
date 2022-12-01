const express = require("express");
const { addCategory, getCategories } = require('../controllers/CategoryController')
const router = express.Router();

// ROUTES

// //PRODUCT ROUTES
// router.post("/addproduct", auth, addProduct);
// router.get("/products", auth, getProduct);
// router.delete("/delete/:id", auth, deleteProducts);
// router.patch("/product/update/:id", auth, updateProduct);

// CATEGORY ROUTES
router.post("/add/category", addCategory);
router.get("/categories", getCategories);



module.exports = router;
