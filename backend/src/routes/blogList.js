const express = require('express');
const BlogController = require('../controllers/blogController');

const router = express.Router();
const blogController = new BlogController();

router.get('/blog-list', blogController.getBlogList.bind(blogController));
router.post('/blog-list', blogController.createBlog.bind(blogController));

module.exports = router;