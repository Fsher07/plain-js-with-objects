// local storage
// Local storage
const title = document.getElementById('title');
const author = document.getElementById('author');
const shelf = document.getElementById('book');
const form = document.getElementById('form');
const books = [];

form.addEventListener('submit', addBook);

function addBook() {
  books.push({
    title : `${title.value}`,
    author : `${author.value}`,
  });
  localStorage.setItem('bookinfo', JSON.stringify(books));
  return false;
}

function showBooks() {
    const li = document.createElement('li');
    const button = document.createElement('button');
    li.innerHTML = `${book.title} by ${book.author}`;
    button.innerHTML = `Remove`
    shelf.appendChild(li);
    li.appendChild(button);
  return false;
}

form.onsubmit = showBooks;

function displayUI() {
  if (localStorage.getItem('bookinfo')) {
    books.JSON.parse(localStorage.getItem('bookinfo'));
    books.forEach(info  => {
      showBooks(info)});
  }

}

