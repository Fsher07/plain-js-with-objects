class Book {
  constructor(author, title) {
    this.title = title;
    this.author = author;
  }

  static books = [];

  static listSection = document.querySelector('.book-list');

  static bookTitle = document.querySelector('#title');

  static formBtn = document.querySelector('.btn-submit');

  static bookAuthor = document.querySelector('#author');

  static listBtn = document.querySelectorAll('.listBtn');

  static addActive = document.querySelectorAll('.section');

  static addBooks = () => {
    const bookItem = new Book(Book.bookTitle.value, Book.bookAuthor.value);

    if (Book.bookTitle.value && Book.bookAuthor.value !== '') {
      Book.books.push(bookItem);
      localStorage.setItem('bookInfo', JSON.stringify(Book.books));
      Book.bookAuthor.value = '';
      Book.bookTitle.value = '';
      Book.addBookItem(bookItem, Book.books.length - 1);
    }
  };

  static delBook = (bookItem, pos) => {
    const bookBlock = document.getElementById(pos);
    Book.books = Book.books.filter((item) => item !== bookItem);
    localStorage.setItem('bookInfo', JSON.stringify(Book.books));
    Book.listSection.removeChild(bookBlock);
  };

  static updateUi = () => {
    if (localStorage.getItem('bookInfo')) {
      Book.books = JSON.parse(localStorage.getItem('bookInfo'));
      Book.books.forEach((bookItem, pos) => {
        Book.addBookItem(bookItem, pos);
      });
    } else {
      localStorage.setItem('bookInfo', '');
      Book.books = [];
    }
  };

  static addBookItem = (bookItem, pos) => {
    const bookBlock = document.createElement('div');
    bookBlock.classList.add('bookDIV');
    bookBlock.id = pos;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');

    bookBlock.innerHTML = `
      <p class='book-title'>'${bookItem.author}'  by ${bookItem.title} </p>`;

    removeBtn.innerText = 'Remove';

    removeBtn.onclick = () => {
      Book.delBook(bookItem, pos);
    };

    bookBlock.appendChild(removeBtn);
    Book.listSection.appendChild(bookBlock);
  };
}

Book.listBtn.forEach((btn, i) => {
  btn.onclick = () => {
    Book.listBtn.forEach((oldBtn) => {
      oldBtn.classList.remove('active');
    });
    btn.classList.add('active');
    Book.addActive.forEach((sec, index) => {
      if (i === index) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });
  };
});

Book.updateUi();

Book.formBtn.addEventListener('click', Book.addBooks);

const timeBox = document.querySelector('#date');

function time() {
  const date = new Date();
  const locale = navigator.language;
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: 'false',
  };
  timeBox.textContent = `${date.toLocaleTimeString(locale, options)}`;
}

setInterval(time, 1000);
