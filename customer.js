var _ = require("lodash");


var Customer = function(){
  this.cash = 35;
  this.library = [];
}

Customer.prototype.addToLibrary = function(book) {
  this.library.push(book);
};

Customer.prototype.buyBook = function(book) {
  if (book.price < this.cash){
    this.library.push(book);
    this.cash -= book.price;
  }
};

Customer.prototype.sellToStore = function(book) {
  _.remove(this.stock, book);
  return this.cash += book.price;
};

Customer.prototype.libraryValue = function() {
  return (_.sumBy(this.library, 'price'));
};

Customer.prototype.libraryValueByGenre = function() {
  return (_.sumBy(_.filter(this.library, 'genre'), 'price')
)};

Customer.prototype.longestBook = function() {
  return (_.maxBy(this.library, 'pages')
)};

Customer.prototype.sortByValue = function() {
  return (_.sortBy(this.library, 'price')
)};

Customer.prototype.compareLibraries = function(customer) {
  return this.libraryValue() === customer2.libraryValue();
};

module.exports = Customer;