const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Import Routes
const petRoutes = require('./routes/pet');
app.use('/pets', petRoutes);

// Routes
app.get('/', (req, res) => {
 res.send('WE ARE ON HOME');
})

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true}, () => {
     console.log('connected to db!');
    })

app.listen(3000);
