const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/censusDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Census Schema
const censusSchema = new mongoose.Schema({
  year: Number,
  takerName: String,
  peopleInHousehold: Number,
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  }
});

const Census = mongoose.model('Census', censusSchema);

// Routes
app.get('/api/census', async (req, res) => {
  try {
    const records = await Census.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/census', async (req, res) => {
  try {
    const newRecord = new Census(req.body);
    await newRecord.save();
    res.json(newRecord);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Similar routes for update and delete

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
