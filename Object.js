// Activity 1: Object Creation and Access
// Task 1
const book = {
    title: "Avatar",
    author: "James Camron",
    year: 2009
}
console.log(book);
// Task 2
console.log(book.title);
console.log(book.author);

// Activity 2: Object Methods
// Task 3
const book1 = {
    title: "Avatar",
    author: "James Camron",
    year: 2009,
    getInfo() {
        return `${this.title} by ${this.author}`;
    }
}

const bookInfo = book1.getInfo(); 
console.log("Book information: ", bookInfo);

// Task 4
const book2 = {
    title: "Avatar",
    author: "James Camron",
    year: 2009,
    updateYear(newYear) {
        this.year = newYear;
    }
};

book2.updateYear(2022);
console.log("Updated book information: ", book2);

// Activity 3: Nested Objects
// Task 5
const library = 
{
    name: "Beautiful Library",
    books:[
    {
        title: "Never Let Me Go",
        author: "Kazuo Ishiguro",
        year: "2005"
    },
    {
        title: "The Underground Railroad",
        author: "Colson Whitehead",
        year: "2016"
    },
    {
        title: "Demon Copperhead",
        author: "Barbara Kingsolver",
        year: "2022"
    },
]
};

console.log("Library information: ", library);
// Task 6
console.log("Library name: ", library.name);
console.log("Book title in the library:");
library.books.forEach((book) => {
    console.log(book.title);
})

//Activity: 4: the this Keyword
// Task 7
// const book4 = {
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     year: 1951,
//     getInfo1() {
//       return `${this.title} (${this.year})`;
//     }
//   };
  
//   const bookInfo1 = book.getInfo1();
//   console.log("Book information:", bookInfo1);

//   Activity 5: Object iteration
// Task 8
const book5 = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951
  };

  for (const property in book) {
    console.log(`${property}: ${book[property]}`);
  }
  
  
//   Task 9
const bookName = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951
  };

  const keys = Object.keys(bookName);
  console.log("Keys (properties):", keys);

  const values = Object.values(bookName);
  console.log("Values:", values);
  