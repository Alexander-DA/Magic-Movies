import { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: String,
    age: String,
    born: String,
    nameInMovie: String,
    imageUrl: String,
});

const Cast = model('Cast', castSchema);

export default Cast;