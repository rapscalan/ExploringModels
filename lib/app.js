
const express = require('express');
const app = express();
const color = require('./models/Color');
const chance = require('chance').Chance();
app.use(express.json());

//color.create([...Array(100)])

// Get
app.get('/', (req, res) => {
    res.send({ text: 'hello' });
});

app.post('/new', (req, res) => {
    console.log('Inside post route');
    const { name, red, green, blue } = req.body;
    color.create( { name, red, green, blue })
    .then((newColor) => res.send(newColor));
});

app.delete('/', (req, res) => {
  console.log('Inside delete route');
});

app.put('/', (req, res) => {
  console.log('Inside put route');
})

module.exports = app;