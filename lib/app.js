
const express = require('express');
const app = express();
const Book = require('./models/Book');
const chance = require('chance').Chance();
app.use(express.json());

//color.create([...Array(100)])

app.get('/all', (req, res) => {
    //res.send({ text: 'hello' });
    Color.find().then(result => res.send(result));
});
// Get
app.get('/:id', (req, res) => {
  const colorById = Color.findById(req.params.id)
  .then(result => res.send(result));
});


app.post('/new', (req, res) => {
    console.log('Inside post route');
    const { name, red, green, blue } = req.body;
    Color.create( { name, red, green, blue })
    .then((newColor) => res.send(newColor));
});

app.delete('/delete/:id', (req, res) => {
  console.log('Inside delete route');
  Color
  .findByIdAndDelete(req.params.id)
  .then(result => res.send(result));
});

app.put('/', (req, res) => {
  console.log('Inside put route');
})

module.exports = app;