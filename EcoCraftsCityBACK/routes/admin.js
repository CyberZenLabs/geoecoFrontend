const express = require("express");

const adminController = require("../controllers/admin")

const router = express.Router();

router.get("/posts", adminController.getPosts);

router.post("/post", adminController.createPost)



module.exports = router
