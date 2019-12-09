const Book = require('./Book');

describe('Book validation', () => {
  describe('title', () => {
    it('requires a title', () => {
      const book = new Book({ 
        author: 'Ernest Hemingway',
        isbn: '345345345345',
        pages: 275,
        genre: 'Fiction'
      });
      const { errors } = book.validateSync();
      expect(errors.title.message).toEqual('`title` is required.');
    });
  });
  describe('author', () => {
    it('requires an authr', () => {
      const book = new Book({ 
        title: 'Death in the Afternoon',
        isbn: '345345345345',
        pages: 275,
        genre: 'Fiction'
      });
      const { errors } = book.validateSync();
      expect(errors.author.message).toEqual('`author` is required.');
    });
  });
  describe('it requires an isbn', () => {
    it('requires an isbn', () => {
      const book = new Book({ 
        title: 'Death in the Afternoon',
        author: 'Ernest Hemingway',
        pages: 275,
        genre: 'Fiction'
      });
      const { errors } = book.validateSync();
      expect(errors.isbn.message).toEqual('`isbn` is required.');
    });
  });
  describe('it requires a genre', () => {
    it('requires a genre', () => {
      const book = new Book({ 
        title: 'Death in the Afternoon',
        author: 'Ernest Hemingway',
        isbn: '345345345345',
        pages: 275
      });
      const { errors } = book.validateSync();
      expect(errors.genre.message).toEqual('`genre` is required.');
    });
  });
});

