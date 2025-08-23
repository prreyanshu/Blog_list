require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogRoutes = require('./routes/blogList');

const app = express();
const PORT = process.env.PORT || 3000;

const cors = require('cors');

const allowedOrigins = ['https://musical-meringue-a3ebf0.netlify.app'];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow non-browser or curl requests
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
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