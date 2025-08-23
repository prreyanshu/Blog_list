const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    paragraph: String 
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
      const { title, content, paragraph } = req.body;
      const newBlog = new Blog({ title, content, paragraph }); // <-- include paragraph
      await newBlog.save();
      res.json(newBlog);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create blog' });
    }
  }

  async getBlogById(req, res) {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) return res.status(404).json({ error: 'Blog not found' });
      res.json(blog);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch blog' });
    }
  }
}

module.exports = BlogController;