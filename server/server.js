const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const parser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const flash = require("express-flash");

// use .env file for configuration constants
require("dotenv").config();

// create connection to database
require("./handlers/dataConnector.js").connect();

// create an express app
const app = express();

const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");
const briefRoutes = require("./routes/briefRoutes");
const findRoutes = require("./routes/findRoutes");
const favouriteRoutes = require("./routes/favouriteRoutes");
const HttpError = require("./models/http-error");

// view engine setup
app.use(expressLayouts);
app.set("view engine", "ejs");

// serves up static files from the public folder.
app.use(express.static("public"));
app.use("/static", express.static("public"));

// setup express middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// Express session
app.use(cookieParser("oreos"));
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// Use express flash
app.use(flash());
// set up the passport authentication
require("./handlers/auth.js");
// set up route handlers
const openRoutes = require("./handlers/openRouter.js");
app.use("/", openRoutes);

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

// dont need the json body parser anymore. built into express
app.use(express.json({ extended: false }));

// enable CORS requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

// defined routes
app.use("/api/movies", movieRoutes);
app.use("/api/brief", briefRoutes);
app.use("/api/find", findRoutes);
app.use("/api/login/", userRoutes);
app.use("/api/favourites", favouriteRoutes);

/*
// error handling for unsupported routes
app.use((req, res, next) => {
  return next(new HttpError("Could not find this route.", 404));
});*/

// Use express to listen to port
let port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Server now running at port= " + port);
});
