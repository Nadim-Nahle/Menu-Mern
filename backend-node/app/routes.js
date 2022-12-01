const express = require("express");

const router = express.Router();

// ROUTES



//PRODUCT ROUTES
router.post("/auth/addproduct", auth, addProduct);
router.get("/auth/products", auth, getProduct);
router.delete("/auth/delete/:id", auth, deleteProducts);
router.patch("/auth/product/update/:id", auth, updateProduct);


//ADMIN
router.post("/auth/login/admin", getAdmin, adminLogin)

module.exports = router;
