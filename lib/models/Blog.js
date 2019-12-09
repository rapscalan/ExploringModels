const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    firstName: String,
    lastName: String
  },
  date: {
    type: Date, default: Date.now
  }
});

module.exports = mongoose.model('Blog', schema);
