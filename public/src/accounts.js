function findAccountById(accounts, id){
  let idCheck = accounts.filter((account) => account.id == id)
  const result = idCheck[0]
  return result
}

function sortAccountsByLastName(accounts){
  accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
  return accounts
}

function getTotalNumberOfBorrows(account, books){
  let counter = 0
  for (let item in books){
    const book = books[item]
    const borrows = book.borrows
    for (let borrowed in borrows) {
      const borrower = borrows[borrowed]
      if (borrower.id == account.id){
      counter ++
    }
    }
  }
  return counter
}


function getBooksPossessedByAccount(account, books, authors){
  let result = []
  for (let item in books){
    const book = books[item]
    const borrows = book.borrows
    for (let borrowed in borrows) {
      const borrower = borrows[borrowed]
      if (borrower.id == account.id && borrower.returned == false){
        for (let person in authors){
          const author = authors[person]
          if (author.id == book.authorId){
          book.author = author
          result.push(book)
          }
        }
      }
    }
  }
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
