const mongoose = require('mongoose');

const schema = new mongoose.schema({
  item: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true 
  },
  productId: {
    type: Number,
    required: true
  },
  numberInStock: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports = new mongoose.model('InventoryItem', schema);
