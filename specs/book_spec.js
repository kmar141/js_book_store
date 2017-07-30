var assert = require('assert');
var Book = require('../book.js');
var Store = require('../store.js');

describe('Book', function(){
  var book;
  var store;

beforeEach(function(){
  book = new Book("Edwin Morgan", "Cathures", "Scottish Literature", 10);
  store = new Store("Pip's Paperbacks", "Glasgow", 100);
})


it("Should be able to return all properties of a book", function(){
  assert.strictEqual(book.details(), "Edwin Morgan, Cathures, Scottish Literature, 10");
})


})