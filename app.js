require('dotenv').config()
const express = require('express');
const movies = require('./routes/movies')
const app = express()
const PORT = 3500;
const mongoose = require('mongoose');

app.use(express.json())

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection
db.on('error', errorMessage=>console.log(errorMessage))
db.once('open',()=>console.log("Connected to db"))


app.get('/',(request, response)=>{
    response.send("IMDB MOVIE LIST")
});

app.use('/api/v1/movies', movies)

app.listen(PORT || 3500 , console.log(`Listening on port ${PORT}`));