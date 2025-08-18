const mongoose = require('mongoose');

// Define Blog schema and model
const blogSchema = new mongoose.Schema({
    title: String,
    content: String
});
const Blog = mongoose.model('Blog', blogSchema);

class BlogController {
  constructor() {
    this.blogs = [];
  }

  async getBlogList(req, res) {
    try {
      const blogs = await Blog.find();
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch blogs' });
    }
  }

  async createBlog(req, res) {
    try {
      const { title, content } = req.body;
      const newBlog = new Blog({ title, content });
      await newBlog.save();
      res.status(201).json(newBlog);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create blog' });
    }
  }
}

module.exports = BlogController;