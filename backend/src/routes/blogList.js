const express = require('express');
const BlogController = require('../controllers/blogController');

const router = express.Router();
const blogController = new BlogController();

router.get('/Blog-list', blogController.getBlogList.bind(blogController));
router.post('/Blog-list', blogController.createBlog.bind(blogController));
router.get('/Blog-list/:id', blogController.getBlogById.bind(blogController));

module.exports = router;