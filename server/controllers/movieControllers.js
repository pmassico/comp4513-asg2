const mongoose = require("mongoose");

const HttpError = require("../models/http-error");

const Movie = require("../models/Movie");
const MovieBrief = require("../models/Movie-Brief");

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
  let movies;
  try {
    movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.json(error);
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

const getFavourites = (req, res) => {
  const favourites = { message: "all favourites" };

  res.json(favourites);
};

const addFavourite = (req, res) => {
  // const {favourite} = req.body;

  res.json({ message: "favourite added" });
};

const removeFavourite = (req, res) => {
  // const {favourite} = req.body;

  res.json({ message: "favourite deleted" });
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
