const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  },
  description: {
    type: [String],
    required: false
  },
  completed: {
    type: Boolean,
    required: false
  },
  recurring: {
    type: Boolean,
    required: true
  },
  reminderTime: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Task', schema);
