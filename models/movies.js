const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    movieName:{
        type: String,
        required:true,
        unique : true,
    },
    genre:{
        type: String,
        required:true
    },
    language:{
        type: String,
        required:true
    },
    releasedYear:{
        type: Number,
        required:true
    },
    rating:{
        type: Number,
    }
});
module.exports = mongoose.model('movieModel', movieSchema);