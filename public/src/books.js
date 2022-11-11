function findAuthorById(authors, id){
  let idCheck = authors.find((author) => author.id == id)
  const result = idCheck
  return result
}

function findBookById(books, id){
  let idCheck = books.find((book) => book.id == id)
  const result = idCheck
  return result
}

function partitionBooksByBorrowedStatus(books){
  let result = []
  let borrows = books.borrows
  let checkedOutBooks = books.filter((checkedBook) => checkedBook.borrows[0].returned == false)
  let returnedBooks = books.filter((returnedBook) => returnedBook.borrows[0].returned == true)
  result.push(checkedOutBooks, returnedBooks)
  return result
}

function getBorrowersForBook(book, accounts){
  let result = []
  const bookBorrowed = book.borrows
  for (let borrows in bookBorrowed){
    const borrower = bookBorrowed[borrows]
    for (let person in accounts){
      const account = accounts[person]
      if (borrower.id == account.id){
        account.returned = borrower.returned
        result.push(account)
      }
    }
  }
  return result.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
