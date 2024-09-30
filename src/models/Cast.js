import { Schema, model, Types } from "mongoose";

const castSchema = new Schema({
    name: String,
    age: String,
    born: String,
    nameInMovie: String,
    imageUrl: String,
    movies: [{
        type: Types.ObjectId,
        ref: 'Movie'
    }]
});

const Cast = model('Cast', castSchema);

export default Cast;