const mongoose = require("mongoose");

const HttpError = require("../models/http-error");

const getAllMovies = (req, res, next) => {
  res.json({ message: "made it" });
};

module.exports = {
  getAllMovies
};
