const Books = {
    title:	"Oliver Twist",
    Author:	"Charles Dickens",
    Language:	"English",
    Published_year:1838

}

function getBook(Book) {
    return `The Book ${Book.title} was written by ${Book.Author} in the year ${Book.Published_year}`
}

console.log(getBook(Books));