const myLibrary = [];

const form = document.querySelector('#form1');
const bookList = document.querySelector('.book-list');
const inputTitle = document.getElementById('input-title');
const inputAuthor = document.getElementById('input-author');
const inputPages = document.getElementById('input-pages');
const inputRead = document.getElementById('input-read');
const btn = document.getElementById('submit-form');

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// ReFactory
// const boook = (title, author, pages, read) => ({
//   title, author, pages, read,
// });

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
}

function readStatus(book) {
  if (book.read) {
    return 'You have read this book.';
  }
  return 'You have not yet read this book.';
}

function displayLibrary() {
  // Remove all children of bookList
  bookList.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('card', 'card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = `"${myLibrary[i].title}" by ${myLibrary[i].author}`;

    const text = document.createElement('p');
    text.classList.add('card-text');
    text.textContent = `This book has ${myLibrary[i].pages} pages. ${readStatus(
      myLibrary[i],
    )}`;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-primary');
    deleteButton.textContent = 'Remove Book';
    deleteButton.setAttribute('data-attribute', i);

    deleteButton.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-attribute');
      removeBookFromLibrary(index);
      displayLibrary();
    });

    const readButton = document.createElement('button');
    readButton.classList.add('btn', 'btn-secondary');
    readButton.textContent = 'Change Read Status';
    readButton.setAttribute('data-attribute', i);

    readButton.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-attribute');
      const book = myLibrary[index];
      book.read = !book.read;
      displayLibrary();
    });

    bookCard.appendChild(title);
    bookCard.appendChild(text);
    bookCard.appendChild(deleteButton);
    bookCard.appendChild(readButton);
    bookList.appendChild(bookCard);
  }
}

function displayForm() {
  form.classList.toggle('d-none');
}

function submitForm() {
  addBookToLibrary(
    new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.checked),
  );
  inputTitle.value = '';
  inputAuthor.value = '';
  inputPages.value = '';
  inputRead.checked = false;

  displayForm();
  displayLibrary();
}

btn.addEventListener('click', () => {
  submitForm();
});

const book1 = new Book(
  'Harry Potter and the Chamber of Secrets',
  'J.K.Rowling',
  533,
  true,
);
const book2 = new Book('Catcher in the Rye', 'J.D. Salinger', 297, true);
const book3 = new Book('Crime and Punishment', 'Fyodor Dostoevsky', 684, true);
const book4 = new Book('Cien Años de Soledad', 'Gabriel Marquez', 484, true);

// const bok1 = boook(
//   'Harry Potter and the Chamber of Secrets',
//   'J.K.Rowling',
//   533,
//   true,
// );
// const bok2 = boook('Catcher in the Rye', 'J.D. Salinger', 297, true);
// const bok3 = boook('Crime and Punishment', 'Fyodor Dostoevsky', 684, true);
// const bok4 = boook('Cien Años de Soledad', 'Gabriel Marquez', 484, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

displayLibrary();
