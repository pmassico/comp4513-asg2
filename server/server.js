const express = require("express");

const app = express();

const movieRoutes = require("./routes/movie-routes");
const userRoutes = require("./routes/user-routes");
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

// error handling for unsupported routes
app.use((req, res, next) => {
  return next(new HttpError("Could not find this route.", 404));
});

app.listen(5000);
