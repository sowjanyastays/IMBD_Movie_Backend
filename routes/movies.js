const express = require('express')
const router = express.Router();
const movieModel = require('../models/movies');
const  {getAllMovies, addMovie, getMovieById, deleteMovie, updateMovie, getMovie}  =  require('../controllers/movies')


router.route('/').get(getAllMovies).post(addMovie);

router.route('/:id').get(getMovie,getMovieById).patch(getMovie,updateMovie).delete(getMovie,deleteMovie)


module.exports = router