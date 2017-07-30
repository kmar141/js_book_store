var _ = require("lodash");


var Book = function(author, title, genre, price, pages){
  this.author = author;
  this.title = title;
  this.genre = genre;
  this.price = price;
  this.pages = pages;
}

Book.prototype.details = function() {
  return this.author + ", " + this.title + ", " + this.genre + ", " + this.price;
};

module.exports = Book;