//helper sort function
function sort(data){
  data.sort((itemA, itemB) => (itemA.count < itemB.count ? 1: -1))
}

function getTotalBooksCount(books){
  const total = books.length
  return total
}

function getTotalAccountsCount(accounts){
  const total = accounts.length
  return total
}

function getBooksBorrowedCount(books){
  let checkedOutBooks = books.filter((checkedBook) => checkedBook.borrows[0].returned == false)
  const total = checkedOutBooks.length
  return total
}

function getMostCommonGenres(books){
  let result = []
  let genreListing = {}
  books.forEach((book) => genreListing[book.genre] ? genreListing[book.genre] ++ : genreListing[book.genre] = 1)
  Object.entries(genreListing).forEach(([key, value]) => result.push({name: key, count: value}))
  sort(result)
  return result.slice(0, 5)
}

function getMostPopularBooks(books){
  let result = []
  books.forEach((book) => {
    result.push({name: book.title, count: book.borrows.length})
  })
  sort(result)
  return result.slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  let result = []
  authors.forEach((author) => {
    let authorList = books.filter((book) => book.authorId === author.id)
    let authorBorrows = authorList.reduce((borrowsTotal, book) => borrowsTotal + book.borrows.length, 0)
    result.push({name: author.name.first + " " + author.name.last, count: authorBorrows})
})
  sort(result)
  return result.slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
