const mongoose = require('mongoose')

// User Login Model
const userSchema = new mongoose.Schema({
    user: {type: String, required: true},
    pass: {type: String, required: true}
});

module.exports = User = mongoose.model('user', userSchema)