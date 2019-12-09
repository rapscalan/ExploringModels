const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  pages: {
    number: Number,
    required: false
  },
  genre: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Book', schema);
