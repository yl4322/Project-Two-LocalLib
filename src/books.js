function findAuthorById(authors, id) {
  return authors.find(author => id === author.id);
}

function findBookById(books, id) {
    let findBook = books.find(book => book.id === id);
    return findBook
}

function partitionBooksByBorrowedStatus(books) {
    let arr1 = books.filter((book) => book.borrows[0].returned === false);
    let arr2 = books.filter((book) => book.borrows[0].returned !== false);
    return [arr1, arr2]
} 

//////////////////////// bit confusion
function getBorrowersForBook(book, accounts) {
    const returned = book.borrows[0].returned
    let getBorrow = book.borrows.map((borrow) => {
     let accountInfo =  accounts.find((account) =>           account.id === borrow.id);
      accountInfo.returned = borrow.returned;
        return accountInfo})
   
    return getBorrow.slice(0, 10)
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
