// Initialize the books
let books;

// create the book class

class UpdateDisplay {
  constructor(author, title) {
    this.title = title;
    this.author = author;
  }

  static listSection = document.querySelector('.book-list');

  static bookTitle = document.querySelector('#title');

  static formBtn = document.querySelector('.btn-submit');

  static bookAuthor = document.querySelector('#author');

  static listBtn = document.querySelectorAll('.listBtn');

  static addActive= document.querySelectorAll('.section');

  // create new book
  static addBooks() {
    const bookItem = new UpdateDisplay(
      UpdateDisplay.bookTitle.value,
      UpdateDisplay.bookAuthor.value,
    );

    if(UpdateDisplay.bookTitle.value && UpdateDisplay.bookAuthor.value != '') {
      books.push(bookItem);
      localStorage.setItem('books', JSON.stringify(books));
  
      UpdateDisplay.bookAuthor.value = '';
      UpdateDisplay.bookTitle.value = '';
      UpdateDisplay.addBookItem(bookItem, books.length - 1);
    }
  }
}
