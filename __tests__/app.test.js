require('dotenv').config();
const request = require('supertest');
const bookApp = require('../lib/app');
require('../lib/utils/connect').connect();
const disconnect = require('../lib/utils/connect').disconnect;

const testBook = {};
describe('book test routes', () => {
  describe('test all crud routes', () => {
    it('can POST a new book', () => {
      request(bookApp)
        .post('/api/book')
        .send({
          title: 'Cannery Row',
          author: 'John Steinbeck',
          isbn: '9780140187373',
          pages: 312,
          genre: 'fiction'
        })
        .then(res => { expect(res.body).toEqual(expect.objectContaining({
          title: 'Cannery Row',
          author: 'John Steinbeck',
          isbn: '9780140187373',
          pages: 312,
          genre: 'fiction'  
        }));
        testBook._id = res.body._id;
        });
    });
  });
  it('can return all the books with GET', () => {
    request(bookApp)
      .get('/api/book')
      .then(res => expect(res.body).toEqual(expect.any(Array)));
  });
  it('can return a book by id', () => request(bookApp)
    .get(`/api/book/${testBook._id}`)
    .then(res => expect(res.body).toEqual(expect.any(Object)))
  );
  it('can update a book with PUT', () => request(bookApp)
    .put(`/api/book/${testBook._id}`)
    .send({
      pages: 350,
    })
    .then(res => expect(res.body._id).toEqual(testBook._id))
  );
  it('can delete a book by id with DELETE', () => request(bookApp)
    .del(`/api/book/${testBook._id}`)
    .then(res => expect(res.body._id).toEqual(testBook._id))
  );
});
afterAll(() => {
  disconnect();
});
