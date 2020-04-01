const express = require("express");

const app = express();

const movieRoutes = require("./routes/movieRoutes");
// const userRoutes = require("./routes/userRoutes");
const briefRoutes = require("./routes/briefRoutes");
const findRoutes = require("./routes/findRoutes");
const favouriteRoutes = require("./routes/favouriteRoutes");
const HttpError = require("./models/http-error");

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
app.get("/", (req, res) => res.send("API Running"));
app.use("/api/movies", movieRoutes);
app.use("/api/brief", briefRoutes);
app.use("/api/find", findRoutes);
// app.use('/api/login', userRoutes)
app.use("/api/favourites", favouriteRoutes);

// error handling for unsupported routes
app.use((req, res, next) => {
  return next(new HttpError("Could not find this route.", 404));
});

app.listen(5000);
