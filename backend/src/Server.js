require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogRoutes = require('./routes/blogList');

const app = express();
const PORT = process.env.PORT || 3000;

console.log('CORS_ORIGIN in use:', process.env.CORS_ORIGIN);

app.use(cors({
  origin: process.env.CORS_ORIGIN
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(express.json());
app.use('/', blogRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});