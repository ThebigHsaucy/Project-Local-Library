function findAccountById(accounts, id) {
  // YOUR SOLUTION HERE
  const findAccountById = (accounts, id) => accounts.find(account => account.id === id);
const accounts = [
  { id: "5f446f2ecfaf0310387c9603", name: { first: "Esther", last: "Tucker" } },
  { id: "5f446f2e2cfa0310387c9602", name: { first: "John", last: "Doe" } }
];

const result = findAccountById(accounts, "5f446f2ecfaf0310387c9603");
console.log(result);
  // use of a Arrow function, while the "id" is a variation of provided example.
  // Hint: You can use the [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method here. 
}

function sortAccountsByLastName(accounts) {
  // YOUR SOLUTION HERE
  // Hint: You can use the [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method here. 
}

function getAccountFullNames(accounts) {
  // YOUR SOLUTION HERE
  // Hint: You can use the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method here.
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
