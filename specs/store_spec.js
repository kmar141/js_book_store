var assert = require('assert');
var Book = require('../book.js');
var Store = require('../store.js');

describe('Store', function(){
  var book;
  var store;

beforeEach(function(){
  cathures = new Book("Edwin Morgan", "Cathures", "Scottish Literature", 10);
  nineteeneightyfour = new Book("George Orwell", "1984", "Political fiction", 5);
  hamlet = new Book("William Shakespear", "Hamlet", "Tragedy", 20);
  store = new Store("Pip's Paperbacks", "Glasgow", 100);
})

it("Should be able to add books to the store", function(){
  store.addBook(cathures);
  store.addBook(nineteeneightyfour);
  store.addBook(hamlet);
  assert.strictEqual(store.stock.length, 3);
})

it("Should create a method that lists the invertory", function(){
  store.addBook(cathures);
  store.addBook(nineteeneightyfour);
  store.addBook(hamlet);
  assert.deepEqual(store.stockList(), [cathures, nineteeneightyfour, hamlet]);
})

it("Should sell a book and adjusts the store's balance", function(){
  store.addBook(cathures);
  assert.strictEqual(store.sellBook(cathures), 110);
})

it("Should display store balance and total cost of stock", function(){
  store.addBook(cathures);
  store.addBook(nineteeneightyfour);
  store.addBook(hamlet);
  assert.strictEqual(store.financials(), "35, 100")
})

it("Should display all books in a genre", function(){
  store.addBook(hamlet);
  assert.deepEqual(store.genreSearch("Tragedy"), [hamlet]);
})





});