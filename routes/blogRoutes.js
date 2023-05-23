const express = require("express");

const { getAllBlog, getBlog, createBlog, deleteBlog, updateBlog } = require("../controllers/blogControllers");

const router = express.Router();

router.get("/", getAllBlog);
router.get("/:id", getBlog);
router.post("/create", createBlog);
router.post("/delete/:id", deleteBlog);
router.post("/update/:id", updateBlog);

module.exports = router;