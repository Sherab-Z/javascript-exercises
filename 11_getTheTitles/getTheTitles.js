const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
];

//  FUNC: Takes an array of objects, 'books', and returns an array of titles
const getTheTitles = function(booksArr) {
  return booksArr.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
