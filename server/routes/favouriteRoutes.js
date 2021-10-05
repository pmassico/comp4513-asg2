const express = require("express");

const movieControllers = require("../controllers/movieControllers");

const router = express.Router();

router.get("/:id", movieControllers.getFavourites);
router.post("/", movieControllers.addFavourite);
router.delete("/", movieControllers.removeFavourite);

module.exports = router;
