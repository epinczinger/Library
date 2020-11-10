let myLibrary = [];

const btn = document.querySelector('#btn');
const form = document.querySelector('#form1');
const bookList = document.querySelector(".book-list");
const inputTitle = document.getElementById('input-title')
const inputAuthor = document.getElementById("input-author");
const inputPages = document.getElementById("input-pages");
const inputRead = document.getElementById("input-title");

addBookToLibrary(new Book("Harry Potter", "J.K.Rowling", 652, true));
addBookToLibrary(new Book("Catcher in the Rye", "J.D. Salinger", 652, true));
addBookToLibrary(new Book("Crime and Punishment", "Fyodor Dostoevsky", 652, true));
addBookToLibrary(new Book("Cien Años de Soledad", "Gabriel Marquez", 652, true));

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
}

function displayLibrary() {
  // Remove all children of bookList
  bookList.innerHTML = ""
  for (let i = 0 ; i < myLibrary.length ; i++) {
    const bookCard = document.createElement("div")
    
    bookCard.classList.add("card", "card-body");
    bookCard.textContent = myLibrary[i]["title"] + ", by " + myLibrary[i]["author"]

    // Add JS to put a button in each card
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-primary");
    deleteButton.textContent = "Remove Book";
    deleteButton.setAttribute("data-attribute", i)
    deleteButton.addEventListener("click", function(event) {
      let index = event.target.getAttribute("data-attribute");
      removeBookFromLibrary(index);
      displayLibrary();
    });

    const readButton = document.createElement('button');
    readButton.classList.add('btn', 'btn-secondary');
    readButton.textContent = 'Read?';

    bookCard.appendChild(deleteButton);
    bookCard.appendChild(readButton);
    bookList.appendChild(bookCard)
  }
}

function submitForm() {
  addBookToLibrary(
    new Book(inputTitle.value, inputAuthor.value, inputPages.value, true)
  );
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";

  displayForm();
  displayLibrary();
}

function displayForm() {
  form.classList.toggle("d-none");
}

Book.prototype.read = function() {
  this.read = !this.read;
};

displayLibrary();