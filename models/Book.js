const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        unique: true
    },

    authors: [{
        type: String
    }],

    description: {
        type: String,
        unique: true
    },

    image: {
        type: String
    },

    link: {
        type: String,
        unique: true
    }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;