const Books = [
  {
    title: "Oliver Twist",
    Author: "Charles Dickens",
    year: 1838,
  },
  {
    title: "pride and prejudice",
    Author: "Jane Austen",
    year: 1813,
  },
];

const bookUtils = {
  setNewEdition: function (book, editionYear) {
    book.latestEdition = editionYear;
  },
  setLanguage: function (book, language) {
    book.language = language;
  },
  setTranslation: function (book, translator) {
    book.translation = {
      translator: translator.name,
      language: translator.language,
    };
  },
  setPublisher: function (book, publisher) {
    book.Publisher = {
      name: publisher.name,
      location: publisher.location,
    };
  },
  isSamePublisher: function (book1, book2) {
    return (
      book1.publisher.name === book2.publisher.name ||
      book1.publisher.location === book2.publisher.location
    );
  },
};

// updating Oliver Twist details
bookUtils.setNewEdition(Books[0], 1839);
bookUtils.setLanguage(Books[0], "English");
bookUtils.setPublisher(Books[0], {
  name: "Richard Bentley",
  location: "Bentley's Miscellany",
});
bookUtils.setTranslation(Books[0], {
  name: "Munir Alba'albaki",
  language: "Arabic",
});
bookUtils.setTranslation(Books[0], { name: "Eli Bijaoui", language: "Hebrew" });

//updating Pride and Prejudice details
bookUtils.setNewEdition(Books[1], 1995);
bookUtils.setLanguage(Books[1], "English");
bookUtils.setPublisher(Books[1], { name: "T. Egerton", location: "Whitehall" });
bookUtils.setTranslation(Books[1], {
  name: "Shoshana Shrira",
  language: "Hebrew",
});

console.log("Book1: ");
console.log(Books[0]);
console.log("Book2: ");
console.log(Books[1]);
