const express = require("express");

const app = express();

app.use(express.json());

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

// middleware to handle errors
app.use((error, req, res, next) => {
  // if response has already been sent just go next
  if (res.headerSent) {
    return next(error);
  }

  // default error code to 500 if not set
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

app.listen(5000);
