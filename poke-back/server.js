require('dotenv').config();

const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

// Connecting mongoose
mongoose.connect(process.env.MONGO_URL);

app.use('/auth', require('./routes/auth'));
app.use('/fav', require('./routes/fav'));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})