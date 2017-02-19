function BookStore() {}

BookStore.prototype.getTotal = function(books) {

    var total = 0;

    books.forEach(function(book) {
       total = total + book.quantity * 8;
    });

    var descuento = this.getDiscount(books);

    return (total - total * descuento);
};

BookStore.prototype.getDiscount = function(books) {
  var booksGroups = books.length;
  var discount = 0;
  switch (booksGroups) {
    case 2:
      discount = 0.05;
      break;
    case 3:
      discount = 0.1;
      break;
    case 4:
      discount = 0.2;
      break;
    case 5:
      discount = 0.25;
      break;
    default:
      discount = 0;
  }

  return discount;
}
