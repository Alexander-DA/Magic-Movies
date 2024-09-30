import Movie from "../models/movie.js";
 
// TODO: Refactor using db filtration 
const getAll = async (filter = {}) => {
    let movies = await Movie.find();

    if (filter.search) {
        movies = movies.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()))
    }

    if (filter.genre) {
        movies = movies.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
    }

    if (filter.year) {
        movies = movies.filter(movie => movie.year === filter.year);
    }

    return movies;
}

const create = (movie) => Movie.create(movie);

const getOne = (movieId) => Movie.findById(movieId).populate('casts');

const attach = async (movieId, castId) => {
    // const movie = await Movie.findById(movieId);
    // movie.casts.push(castId);
    // return movie.save();

    return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
}

export default {
    getAll,
    create,
    getOne,
    attach
}