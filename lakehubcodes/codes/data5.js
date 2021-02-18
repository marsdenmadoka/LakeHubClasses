// object references
let myAccount = {
  name: "Mike Mead",
  expenses: 0,
  income: 0,
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
};

addExpense(myAccount, 2000);

console.log(myAccount);

let addIncome = function (account, income) {
  account.income = account.income + income;
};

addIncome(myAccount, 11500);

console.log(myAccount);

// Mike's book balance is 9500
// getAccountSummary

function getAccountSummary(account) {
  const balance = account.income - account.expenses;
  return `Mike's book balance is ${balance}`;
}

console.log(getAccountSummary(myAccount));
