const express = require("express");

const movieControllers = require("../controllers/movieControllers");

const router = express.Router();

router.get("/title/:substring", movieControllers.getBySubstring);
router.get("/year/:y1/:y2", movieControllers.getByYear);
router.get("/rating/:r1/:r2", movieControllers.getByRating);

module.exports = router;
