const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function ifReadable(library){
    const readableBooks =  library.filter((book) => {
        return book.readingStatus
    });
    readableBooks.forEach(book => {
        console.log(`The readable book is - Title: ${book.title}, Writer: ${book.author}`);
        
    });
}
ifReadable(library)