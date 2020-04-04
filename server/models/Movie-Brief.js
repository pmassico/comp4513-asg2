const mongoose = require('mongoose');

const movieBriefSchema = new.mongoose.Schema({
    id: Number,
    tmdb_id: Number,
    imdb_id: String,
    release_date: String,
    title: String,
    runtime: Number,
    revenue: Number,
    tagline: String,
    poster: String,
    ratings: {
        popularity: Number,
        average: Number,
        count: Number
    }
})
module.exports = mongoose.model('MovieBrief', movieBriefSchema);