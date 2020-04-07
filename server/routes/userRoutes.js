const express = require("express");

const userControllers = require("../controllers/userControllers");

const router = express.Router();

router.get("/user", userControllers.getUserId);

module.exports = router;