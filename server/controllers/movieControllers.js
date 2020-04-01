const mongoose = require("mongoose");

const HttpError = require("../models/http-error");

const getAllMovies = (req, res, next) => {
  const movies = { message: "all movies" };

  res.json(movies);
};

const getMovieById = (req, res) => {
  const id = req.params.id;
  const movie = { message: `the movie with id of ${id}` };

  res.json(movie);
};

const getBriefSet = (req, res) => {
  const movies = { message: "brief set of movies" };

  res.json(movies);
};

const getBySubstring = (req, res) => {
  const substring = req.params.substring;
  const movies = { message: `movies with substring of ${substring}` };

  res.json(movies);
};

const getByYear = (req, res) => {
  const y1 = req.params.y1;
  const y2 = req.params.y2;

  const movies = { message: `movies between ${y1} and ${y2}` };

  res.json(movies);
};

const getByRating = (req, res) => {
  const r1 = req.params.r1;
  const r2 = req.params.r2;

  const movies = { message: `movies with rating between ${r1} and ${r2}` };

  res.json(movies);
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
