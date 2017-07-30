var _ = require("lodash");


var Store = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.stock = [];
}

Store.prototype.addBook = function(book) {
  this.stock.push(book);
};

Store.prototype.stockList = function() {
  return _.forEach(this.stock, function(item){
    return item; 
})
}

Store.prototype.buyBook = function(book) {
  if (book.price < this.balance){
    this.stock.push(book);
    this.balance -= book.price;
  }
};

Store.prototype.sellBook = function(book) {
  _.remove(this.stock, book);
  return this.balance += book.price;
};

Store.prototype.financials = function() {
  var total = (_.sumBy(this.stock, 'price'));
  return total + ", " + this.balance;
};

Store.prototype.genreSearch = function(genre) {
  return _.filter(this.stock, 'genre');
};

module.exports = Store;