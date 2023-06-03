const movieModel =require('../models/movies')

//Get all movies available
const getAllMovies = async(request, response)=>{
    try{
        const movieList = await movieModel.find();
        response.status(200).json(movieList);
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}

//add Movie

const addMovie = async(request, response)=>{
    const newMovie = new movieModel({
        movieName : request.body.movieName,
        genre : request.body.genre,
        language : request.body.language,
        releasedYear : request.body.releasedYear,
        rating : request.body.rating,
    });
    try{
        const movie = await newMovie.save();
        response.status(200).json(movie);
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}

//Get a movie with id
const getMovieById = (request, response)=>{
    response.status(200).json(response.movie);
}

//Updating a movie
const updateMovie = async(request,response)=>{
    if(request.body.movieName!=null){
        response.movie.movieName = request.body.movieName;
    }
    try{
        const updateMovie = await response.movie.save()
        response.status(201).json(updateMovie)
    }
    catch(error){
        response.status(400).json({message:error.message})
    }
}

//Delete a movie
const deleteMovie = async(request,response)=>{
    try{
        await response.movie.deleteOne();
        response.json({message:`Deleted movie ${response.user.movieName}`})
    }
    catch(error){
        response.status(400).json({message:error.message})
    }
}

async function getMovie(request,response,next){
    let movie;
    try{
        movie = await movieModel.findById(request.params.id)
        if(movie===null){
            response.status(404).send({message: `Cannot find movie with is ${request.params.id}`})
        }
    }
    catch(error){
        return response.status(500).send({message:error.message})
    }
    response.movie = movie;
    next();
}


module.exports = {getAllMovies, addMovie, getMovieById, deleteMovie, updateMovie, getMovie}