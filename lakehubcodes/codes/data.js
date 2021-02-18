let myBook={
    title:"1984",
    author:"George",
    pagecount:400
};
console.log(myBook.title)

let getBookinfo=function(book){ //objects in function
    return{
        summary: `${book.title} by ${book.author}`,
        pageCountInfo:`${book.title} is ${book.pagecount}`
    }
}

let booksummary = getBookinfo(myBook);

console.log("Book info " +booksummary.summary + booksummary.pageCountInfo)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//object as references
let myAccount={
    name:"mike",
    expenses:0,
    income:0
}
let addExpense = function(account,amount){
    account.expenses=account.expenses + amount
}

addExpense(myAccount,2000);
console.log(myAccount)

let addIncome=function(account,income){
    account.income=account.income + income
}
//console.log(addIncome)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//methods
let restaurant = {
    name:'livens',
    guestCapacity:75,
    guestCount:0,

    checkAvailablity:function(partySize){
        let seatsLeft=this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty:function(partySize){
        this.guestCount = this.guestCount + partySize
    },
    removeParty:function(partySize){
this.guestCount=this.guestCount - partySize
    }
}

restaurant.seatParty(50)

console.log("restarunt guest "+restaurant.guestCount)
 restaurant.removeParty(2)
console.log(restaurant.checkAvailablity(30));


