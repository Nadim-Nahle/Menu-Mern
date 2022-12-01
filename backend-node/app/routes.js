const express = require("express");

const router = express.Router();

// ROUTES

//PRODUCT ROUTES
router.post("/addproduct", auth, addProduct);
router.get("/products", auth, getProduct);
router.delete("/delete/:id", auth, deleteProducts);
router.patch("/product/update/:id", auth, updateProduct);



module.exports = router;
