var assert = require('assert');
var Book = require('../book.js');
var Store = require('../store.js');
var Customer = require('../customer.js')

describe('Customer', function(){
  var book;
  var store;
  var customer;

beforeEach(function(){
  cathures = new Book("Edwin Morgan", "Cathures", "Scottish Literature", 10, 500);
  filler = new Book("Author", "Title", "Scottish Literature", 15, 1);
  nineteeneightyfour = new Book("George Orwell", "1984", "Political fiction", 5, 325);
  hamlet = new Book("William Shakespear", "Hamlet", "Tragedy", 20, 380);
  profit = new Book("Imaginary Customer", "The Art of Hustling Small Bookshops", "Business and Finance", 50, 1337);
  store = new Store("Pip's Paperbacks", "Glasgow", 100);
  customer = new Customer();
  customer2 = new Customer();
})

it("Should be able to buy books", function(){
  store.addBook(cathures);
  store.sellBook(cathures);
  customer.buyBook(cathures);
  assert.strictEqual(customer.cash, 25);
  assert.strictEqual(store.balance, 110);
})

it("Should be able to sell books", function(){
  customer.addToLibrary(profit);
  customer.sellToStore(profit);
  store.buyBook(profit);
  assert.strictEqual(customer.cash, 85);
  assert.strictEqual(store.balance, 50);
})

it("Should be able to view the value of all owned books", function(){
  customer.addToLibrary(profit);
  customer.addToLibrary(hamlet);
  assert.strictEqual(customer.libraryValue(), 70);
})

it("Should be able to view the total value of books by genre", function(){
  customer.addToLibrary(cathures);
  customer.addToLibrary(filler);
  assert.strictEqual(customer.libraryValueByGenre(), 25);
})

it("Should be able to view longest book", function(){
  customer.addToLibrary(cathures);
  customer.addToLibrary(filler);
  customer.addToLibrary(hamlet);
  customer.addToLibrary(nineteeneightyfour);
  customer.addToLibrary(profit);
  assert.strictEqual(customer.longestBook(), profit);
})

it("Should be able to sort books by value", function(){
  customer.addToLibrary(cathures);
  customer.addToLibrary(filler);
  customer.addToLibrary(hamlet);
  customer.addToLibrary(nineteeneightyfour);
  customer.addToLibrary(profit);
  assert.deepEqual(customer.sortByValue(), [nineteeneightyfour, cathures, filler, hamlet, profit]);
})

it("Should be able to compare one customer's library to another's", function(){
  customer.addToLibrary(cathures);
  customer.addToLibrary(filler);
  customer2.addToLibrary(nineteeneightyfour);
  customer2.addToLibrary(hamlet);
  assert.strictEqual(customer.compareLibraries(), true);
})


})

