const express = require("express");

const movieControllers = require("../controllers/movieControllers");

const router = express.Router();

router.get("/", movieControllers.getBriefSet);

module.exports = router;
