require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`CMS Backend Server is running on port ${PORT}`);
});
