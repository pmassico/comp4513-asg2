const mongoose = require("mongoose");

const HttpError = require("../models/http-error");

const Movie = require("../models/Movie");
const MovieBrief = require("../models/Movie-Brief");
const User = require("../models/User");

const getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.json(error);
  }
};

const getMovieById = async (req, res) => {
  const id = req.params.id;
  let movie;
  try {
    movie = await Movie.find({ id: id });
    res.json(movie);
  } catch (error) {
    res.json(error);
  }
};

const getBriefSet = async (req, res) => {
  let briefSet;
  try {
    briefSet = await MovieBrief.find();
    res.json(briefSet);
  } catch (error) {
    res.json(error);
  }
};

const getBySubstring = async (req, res) => {
  const substring = req.params.substring;
  let movies;
  try {
    movies = await Movie.find({ title: { $regex: substring, $options: "i" } });
    res.json(movies);
  } catch (error) {
    res.json(error);
  }
};

const getByYear = async (req, res) => {
  const y1 = req.params.y1;
  const y2 = req.params.y2;
  console.log(y1 + y2);

  let movies;
  try {
    movies = await Movie.find();
  } catch (error) {
    res.json(error);
  }

  const filteredMovies = movies.filter(
    movie =>
      movie.release_date.slice(0, 4) >= y1 &&
      movie.release_date.slice(0, 4) <= y2
  );

  if (filteredMovies) {
    res.json(filteredMovies);
  } else {
    res.json();
  }
};

// /api/find/rating/:r1/:r2
const getByRating = async (req, res) => {
  const r1 = req.params.r1;
  const r2 = req.params.r2;
  let movies;

  try {
    movies = await Movie.find({ "ratings.average": { $gte: r1, $lte: r2 } });
    res.json(movies);
  } catch (error) {
    res.json(error);
  }
};

const getFavourites = async (req, res) => {
  const userId = req.body.id;

  let user;
  try {
    user = await User.find({ id: userId });
  } catch (error) {
    res.json(error);
  }

  if (user) {
    res.json(user.favourites);
  } else {
    res.json({ message: "user could not be found" });
  }
};

const addFavourite = async (req, res) => {
  const userId = req.body.id;
  const favourite = req.body.favourite;

  let user;
  try {
    user = await User.find({ id: userId });
  } catch (error) {
    res.json(error);
  }

  if (user) {
    await user.favorites.push(favourite);
    await user.save();
    res.json(user.favourites);
  } else {
    res.json({ message: "Could not add favourite" });
  }
};

const removeFavourite = async (req, res) => {
  const userId = req.body.id;
  const favourite = req.body.favourite;

  let user;
  try {
    user = await User.find({ id: userId });
  } catch (error) {
    res.json(error);
  }

  if (user) {
    user.favorites = user.favorites.filter(fav => favourite.id != fav.id);
    await user.save();
    res.json(user.favourites);
  } else {
    res.json({ message: "user could not be found" });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  getBriefSet,
  getBySubstring,
  getByYear,
  getByRating,
  getFavourites,
  addFavourite,
  removeFavourite
};
