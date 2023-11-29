/*
function getTotalBooksCount(books) {
    var total = 0
    let getTotal = books.forEach(book => {
      total = total + 1})
    return total
}
*/

////for trying purpose, basic function
function getTotalBooksCount(books) {
    let total = 0
  for (let i = 0; i < books.length; i++)
    total ++;
  return total
}
       
function getTotalAccountsCount(accounts) {
    let total = 0
    let getTotal = accounts.forEach((account) =>
     total++)
    return total
}

// correction based on feedback - 
//created at least one function that helps support the tested functions.
  function getTotalAccountsCount(accounts) {
  return getTotalBooksCount(accounts)
}

function getBooksBorrowedCount(books) {
    let total = 0
    let getTotal = books.forEach((book) => {
      book.borrows.forEach((borrow) => {
        if(borrow.returned === false){
          total ++
        }
      })
    })
    return total
  }

//////// confuse
function getMostCommonGenres(books) {
   const genres = books.map((book) => book.genre);
       
   let commonGenres = genres.reduce((acc, genre) => {
    if(!acc[genre]){
      acc[genre] = {name: genre, count: 0}
    }
    acc[genre].count++
    return acc
  } , [])
   
   return Object.values(commonGenres).sort((genreA, genreB) => genreB.count - genreA.count).splice(0, 5)
      } 

function getMostPopularBooks(books) {      
     let popularBooks = books.reduce((total , book) => {
     const newObj = {
       name:book.title, count:book.borrows.length
 }
     total.push(newObj);
     return total;     
 },[])          
    return sortedAndSlice(popularBooks)                   }


function getMostPopularBooks(books) {
  let orderedBooks=books.sort((bookA, bookB)=>(bookA.borrows.length>bookB.borrows.length ? -1 : 1));
  let orderedLimitedBooks = orderedBooks

  const topFiveList=orderedLimitedBooks.map((book)=>book.title)
  console.log(topFiveList);
  const topFiveListObjects=[];
   for(let i=0;i<5;i++){
     const newBook={
       name:topFiveList[i],
       count:books[i].borrows.length  
     }
     topFiveListObjects.push(newBook)
    
   }
  console.log(topFiveListObjects)
     return topFiveListObjects;
 }    
    
  
  
  
function getMostPopularAuthors(books, authors) {
      //use sort array method
      
      const getBooksByAuthorId = (books, authorId) => { return books.filter((book) => book.authorId === authorId); };
      const result = authors.map((author) => {
        const fullName = `${author.name.first} ${author.name.last}`; 
                                             
        const booksByAuthor = getBooksByAuthorId(books, author.id); 
        const totalBorrows = booksByAuthor.reduce((accum, book) => accum + book.borrows.length, 0); 
        
        const newAuthorInfo = { name: fullName, count: totalBorrows, };
        return newAuthorInfo; }); 
      
      return Object.values(result).sort((bookA, bookB) => bookB.count - bookA.count).splice(0,5); }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
