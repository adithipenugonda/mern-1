class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = true;
  }

  borrow() {
    this.isAvailable = false;
  }

  returnBook() {
    this.isAvailable = true;
  }

  getInfo() {
    return this.title + " by " + this.author + " (" + this.pages + " pages)";
  }

  isLongBook() {
    return this.pages > 300;
  }
}

let book1 = new Book("Harry Potter", "J.K. Rowling", 350);
let book2 = new Book("1984", "George Orwell", 328);
let book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
let book4 = new Book("The Alchemist", "Paulo Coelho", 208);
let book5 = new Book("Atomic Habits", "James Clear", 320);

let library = [book1, book2, book3, book4, book5];


for (let book of library) {
  console.log(book.getInfo());
}


