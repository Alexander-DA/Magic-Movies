import Movie from "../models/Movie.js";
 
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

const create = (movie, ownerId) => Movie.create({ ...movie, owner: ownerId });

const getOne = (movieId) => Movie.findById(movieId).populate('casts.cast');

const attach = async (movieId, castId, character) => {
    // const movie = await Movie.findById(movieId);
    // movie.casts.push(castId);
    // return movie.save();

    return Movie.findByIdAndUpdate(movieId, { $push: { casts: { cast: castId, character } } });
}

export default {
    getAll,
    create,
    getOne,
    attach
}