let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 400,
};

let getBookInfo = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountInfo: `${book.title} is ${book.pageCount} pages long`,
  };
};

let bookSummary = getBookInfo(myBook);

console.log(bookSummary.pageCountInfo);
console.log(bookSummary.summary);