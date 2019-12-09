const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  frontWheelDrive: {
    type: Boolean,
    required: false
  },
  fuelType: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Car', schema);
