const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogRoutes = require('./routes/blogList');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: ['https://blog-list-fg26fpx49-prreyanshus-projects.vercel.app']
}));

// Connect to MongoDB
mongoose.connect('mongodb+srv://test1:aawsdawfasdawdsaw@cluster0.ibne0.mongodb.net/blogdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

app.use(express.json());
app.use('/', blogRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});