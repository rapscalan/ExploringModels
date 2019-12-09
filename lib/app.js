
const express = require('express');
const app = express();
const Book = require('./models/Book');
const chance = require('chance').Chance();
app.use(express.json());


app.get('/api/book', (req, res) => {
    Book.find().then(result => res.send(result));
});
app.get('/api/book/:id', (req, res) => {
  const BookById = Book.findById(req.params.id)
  .then(result => res.send(result));
});

app.post('/api/book', (req, res) => {
    const { title, author, isbn, pages, genre } = req.body;
    const book = Book.create( { name, red, green, blue })
    .then((newBook) => res.send(newBook));
});

app.delete('/api/book/:id', (req, res) => {
  Book
  .findByIdAndDelete({ _id: req.params.id })
  .then(result => res.send(result));
});

app.put('/api/book/:id', async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id);
  res.send(updatedBook);
});

module.exports = app;