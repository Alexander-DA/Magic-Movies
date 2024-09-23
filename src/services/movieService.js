import movieData from "../data/movieData.js";
import uniqId from 'uniqid';
 
const getAll = () => movieData.getAll();

const create = (movie) => {
    movie.id = uniqId();
    return movieData.create(movie);
}

const getOne = async (movieId) => {
    const movies = await movieData.getAll();

    const resultMovie = movies.find(movie => movie.id == movieId);

    return resultMovie;
}

export default {
    getAll,
    create,
    getOne
}