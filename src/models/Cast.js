import { Schema, model, Types } from "mongoose";

const castSchema = new Schema({
    name: {
        type: String,
        validate: [/^[A-Za-z0-9 ]+$/, 'Name must contain only alpha numeric symbols!'],
    },
    age: {
        type: Number,
        min: 1,
        max: 120,
    },
    born: {
        type: String,
        minLength: 10,
        validate: [/^[A-Za-z0-9 ]+$/, 'Born must contain only alpha numeric symbols!'],
    },
    // nameInMovie: {
    //     type: String,
        
    // },
    imageUrl: {
        type: String,
        validate: [/^https?:\/\//, "Invalid image url!"],
    },
    // movies: [{
    //     type: Types.ObjectId,
    //     ref: 'Movie'
    // }]
});

const Cast = model('Cast', castSchema);

export default Cast;