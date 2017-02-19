"use strict";

describe('a test suite', function() {

    it('should return 8 euros for 1 Harry-Potter-I book, no discounts applied', function() {

        var groupedBooks = {
          title: 'Harry Potter I',
          quantity: 1
        };

        var bookList = [];
        bookList.push(groupedBooks);

        var bookStore = new BookStore();

        var result = bookStore.getTotal(bookList);

        expect(result).toBe(8);
    });

    it('should return 40 euros for 5 Harry-Potter-I saga book, no discounts applied', function() {

        var groupedBooks = {
            title: 'Harry Potter I',
            quantity: 5
        };

        var bookList = [];
        bookList.push(groupedBooks);

        var bookStore = new BookStore();

        var result = bookStore.getTotal(bookList);

        expect(result).toBe(40);
    });

    it('should return 48 euros for 6 Harry-Potter-I saga book, no discounts applied', function() {

        var groupedBooks = {
            title: 'Harry Potter I',
            quantity: 6
        };

        var bookList = [];
        bookList.push(groupedBooks);

        var bookStore = new BookStore();

        var result = bookStore.getTotal(bookList);

        expect(result).toBe(48);
    });

    it('should return 15.2 euros for both, Harry-Potter-I and Harry-Potter-II books, 5% discount for different book types applied', function() {
        var harryPotterIGroupedBooks = {
            type: 'Harry-Potter-I',
            quantity: 1
        };
        var harryPotterIIGroupedBooks = {
            type: 'Harry-Potter-II',
            quantity: 1
        };

        var bookList = [];
        bookList.push(harryPotterIGroupedBooks);
        bookList.push(harryPotterIIGroupedBooks);

        console.log('bookList length ', bookList.length);

        var bookStore = new BookStore();

        var result = bookStore.getTotal(bookList);
        expect(result).toBe(15.2);

    });

    it('should return 5% for two Harry Potter book different type', function() {
      var harryPotterIGroupedBooks = {
          type: 'Harry-Potter-I',
          quantity: 1
      };
      var harryPotterIIGroupedBooks = {
          type: 'Harry-Potter-II',
          quantity: 1
      };

      var bookList = [];
      bookList.push(harryPotterIGroupedBooks);
      bookList.push(harryPotterIIGroupedBooks);

      var bookStore = new BookStore();

      var result = bookStore.getDiscount(bookList);
      expect(result).toBe(0.05);
    });

    it('should return 10% for three Harry Potter book different type', function() {
      var harryPotterIGroupedBooks = {
          type: 'Harry-Potter-I',
          quantity: 1
      };
      var harryPotterIIGroupedBooks = {
          type: 'Harry-Potter-II',
          quantity: 1
      };
      var harryPotterIIIGroupedBooks = {
          type: 'Harry-Potter-III',
          quantity: 1
      }

      var bookList = [];
      bookList.push(harryPotterIGroupedBooks);
      bookList.push(harryPotterIIGroupedBooks);
      bookList.push(harryPotterIIIGroupedBooks);

      var bookStore = new BookStore();

      var result = bookStore.getDiscount(bookList);
      expect(result).toBe(0.1);
    });

    it('should return 10% for three Harry Potter book different type', function() {
      var harryPotterIGroupedBooks = {
          type: 'Harry-Potter-I',
          quantity: 1
      };
      var harryPotterIIGroupedBooks = {
          type: 'Harry-Potter-II',
          quantity: 1
      };
      var harryPotterIIIGroupedBooks = {
          type: 'Harry-Potter-III',
          quantity: 1
      };
      var harryPotterIVGroupedBooks = {
          type: 'Harry-Potter-IV',
          quantity: 1
      }

      var bookList = [];
      bookList.push(harryPotterIGroupedBooks);
      bookList.push(harryPotterIIGroupedBooks);
      bookList.push(harryPotterIIIGroupedBooks);
      bookList.push(harryPotterIVGroupedBooks);

      var bookStore = new BookStore();

      var result = bookStore.getDiscount(bookList);
      expect(result).toBe(0.2);
    });

});
