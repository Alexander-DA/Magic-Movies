import movieData from "../data/movieData.js";
import uniqId from 'uniqid';
 
const getAll = () => movieData.getAll();

const create = (movie) => {
    movie.id = uniqId();
    return movieData.create(movie);
}

export default {
    getAll,
    create
}