const express = require("express");

const movieControllers = require("../controllers/movie-controllers");

const router = express.Router();

router.get("/", movieControllers.getAllMovies);

module.exports = router;
