require('dotenv').config(); 
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv'); 
dotenv.config();  // Load environment variables
// Connect to database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Define routes


app.use(cors({
    origin: 'http://localhost:3000', // Change this to your frontend URL
    credentials: true
  }));
  app.use(express.json());
  
  app.use('/api/auth', require('./routes/auth'));


  app.get('/', (req, res) => {
    res.send('Welcome to the API');
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
