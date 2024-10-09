import { Schema, model, Types } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Movie title is required!'],
        minLength: 5,
        validate: [/^[A-Za-z0-9 ]+$/, 'Title must contain only alpha numeric symbols!']
    },
    genre: {
        type: String,
        required: [true, 'Movie genre is required!'],
        lowercase: true,
        minLength: 5,
        validate: [/^[A-Za-z0-9 ]+$/, 'Genre must contain only alpha numeric symbols!']
    },
    director: {
        type: String,
        required: [true, 'Movie director is required!'],
        minLength: 5,
        validate: [/^[A-Za-z0-9 ]+$/, 'Director must contain only alpha numeric symbols!']
    },
    year: {
        type: Number,
        required: [true, 'Movie year is required!'],
        min: [1900, "Cannot add movies older than 1900 year!"],
        max: [2050, "Cannot add movies after 2050 year!"]
    },
    rating: {
        type: Number,
        validate: {
            validator: function(value) {
                if (this.year >= 2000 && value){
                    return !!value;
                }

                return true;
            },
            message: 'Rating is required for movies after 2000 year!',
        },
        min: [1, "Rating should be at least 1!"],
        max: [5, "Rating should not be more than 5!"]
    },
    description: {
        type: String,
        required: [true, 'Movie description is required!'],
        validate: [/^[A-Za-z0-9 ]+$/, 'Director must contain only alpha numeric symbols!'],
        minLength: [20, "Description should be at least 20 symbols!"]
    },
    imageUrl: {
        type: String,
        validate: [/^https?:\/\//, "Invalid image url!"],
    },
    casts: [{
        // _id: false,
        character: {
            type: String,
            minLength: 5,
            validate: [/^[A-Za-z0-9 ]+$/, 'Character must contain only alpha numeric symbols!']
        },
        cast: {
            type: Types.ObjectId,
            ref: 'Cast'
        },
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    }
});

const Movie = model('Movie', movieSchema);

export default Movie;