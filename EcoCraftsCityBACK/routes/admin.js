const express = require("express");

const adminController = require("../controllers/admin")

const router = express.Router();



// router.post("/product", adminController.getProducts);

router.post("/product", adminController.createProduct);

router.post("/user", adminController.createUser);



module.exports = router
