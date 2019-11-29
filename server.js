const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const Book = require("./models/Book.js");
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// If deployed, use deployed database;
// otherwise, use local googleBooks database
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/googleBooks";

// Connect Mongo database to Mongoose
mongoose.connect(MONGODB_URI);

// Find all books in the database
app.get("/api/books", function(req, res) {
  Book.find({})
    .then(booksFound => {
      res.json(booksFound);
    })
    .catch(err => {
      res.json(err);
    });
});

// Add a new book to the database
app.post("/api/books", (req, res) => {
  Book.create(req.body)
    .then(newBook => {
      res.json(newBook);
    })
    .catch(err => {
      res.json(err);
    });
});

// Delete a book from the database
app.delete("/api/books/:id", (req, res) => {
  Book.deleteOne({ _id: req.params.id })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}.`);
});
