import Movie from "../models/movie.js";
 
// TODO: Refactor using db filtration 
const getAll = (filter = {}) => {
    let moviesQuery = Movie.find();

    if (filter.search) {
        // moviesQuery = moviesQuery.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()));
        moviesQuery.find({ title: { $regex: filter.search, $options: 'i' } });
    }

    if (filter.genre) {       
        moviesQuery.find({ genre: { $regex: filter.genre, $options: 'i' } });
        // moviesQuery.where('genre').equals(filter.genre.toLowerCase());
    }

    if (filter.year) {
        moviesQuery.find({ year: filter.year });
        // moviesQuery.where('year').equals(filter.year);
    }

    return moviesQuery;
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