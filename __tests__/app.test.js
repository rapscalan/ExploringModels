require('dotenv').config();
require('supertest');
const bookApp = require('../lib/app');
require('../lib/utils/connect').connect();
const disconnect = require('../lib/utils/connect').disconnect;

const testBook = {};
describe('book test routes', () => {
  expect('test all crud routes', () => {
    if('can POST a new book', () => {
      request(bookApp)
        .post('/api/post')
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
        })
    });
  });
  it('can return all the books with GET', () => {
    request(app)
      .get('/api/book')
      .then(res => expect(res.body).toEqual(expect.any(Array)))
  });
  it('can return a book by id', () => request(bookApp)
    .get(`/api/book/${testBook._id}`)
    .then(res => expect(res.body).toEqual(expect.any(Object)))
  );
  it('can update a book with PUT', () => request(app)
    .put(`/api/put/${testBook._id}`)
    .send({
      pages: 350,
    })
    .then(res => expect(res.body._id).toEqual(testBook._id))
  );
  it('can delete a book by id with DELETE', () => request(app)
    .del(`/api/delete/${testBook._id}`)
    .then(res => expect(res.body._id).toEqual(testBook._id))
  );
});
afterAll(() => {
  disconnect();
});
//Get

//Post

//Put

//Delete
