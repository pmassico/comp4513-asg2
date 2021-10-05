const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// define a schema that maps to the structure of the data in MongoDB
const userSchema = new mongoose.Schema({
  id: Number,
  details: {
  firstname: String,
  lastname: String,
  city: String,
  country: String
  },
  picture: {
  large: String,
  thumbnail: String
  },
  membership: {
  date_joined: String,
  last_update: String,
  likes: Number
  },
  email: String,
  password: String,
  apikey: String,
  favorites: [ {
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
  },
  details: {
    overview: String,
    genres: [
      {
        id: Number,
        name: String
      }
    ],
    keywords: [
      {
        id: Number,
        name: String
      }
    ]
  },
  production: {
    crew: [
      {
        credit_id: String,
        department: String,
        gender: Number,
        id: Number,
        job: String,
        name: String
      }
    ],
    cast: [
      {
        cast_id: Number,
        character: String,
        credit_id: String,
        gender: Number,
        id: Number,
        name: String,
        order: Number
      }
    ],
    companies: [
      {
        name: String,
        id: Number
      }
    ],
    countries: [
      {
        iso_3166_1: String,
        name: String
      }
    ]
  }}
  ]
});

// We'll use this later on to make sure that the user trying to log in has the
// correct credentials. Can't be arrow syntax because need 'this' within it
userSchema.methods.isValidPassword = async function(formPassword) {
  const user = this;
  const hash = user.password;
  // Hashes the password sent by the user for login and checks if the
  // digest stored in the database matches the one sent. Returns true
  // if it does else false.
  const compare = await bcrypt.compare(formPassword, hash);
  return compare;
} 

module.exports = mongoose.model('User', userSchema, 'logins');