function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}


function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
}


function getTotalNumberOfBorrows(account, books) {
  let total = 0
  let getTotal = books.forEach(book => {
    book.borrows.forEach(borrow => {
      if(borrow.id === account.id){total ++}
    })
  })
  return total
}

// ------------------------------hard*****
function getBooksPossessedByAccount(account, books, authors) {
  
 let result = books.filter(book => book.borrows.find(thisBook => (thisBook.id === account.id && !thisBook.returned)))
 
 result.forEach(book => {
    let thisAuthor = authors.find(author => book.authorId === author.id)
    book["author"] = thisAuthor
 })
  return result
  }



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
