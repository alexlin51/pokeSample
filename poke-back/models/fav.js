const mongoose = require('mongoose')

const favSchema = new mongoose.Schema({
    user: {type: String, required: true},
    fav: {type: String, required: true}
});

module.exports = Fav = mongoose.model('fav', favSchema)