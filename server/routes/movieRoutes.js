const express = require("express");

const movieControllers = require("../controllers/movieControllers");

const router = express.Router();

router.get("/", movieControllers.getAllMovies);
router.get("/:id", movieControllers.getMovieById);


module.exports = router;
