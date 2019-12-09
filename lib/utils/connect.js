const mongoose = require('mongoose');

function connect() {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on('connected', () => {
    console.log('We connected!!! :) - 😂');
  });

  mongoose.connection.on('error', () => {
    console.error('We cannost connect :( - 😔')
  });
};

const disconnect = () => {
  mongoose.connection.close();
  mongoose.disconnect();
}

module.exports = { connect, disconnect };
