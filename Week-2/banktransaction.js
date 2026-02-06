const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

const creditTransactions = transactions.filter(t => t.type === "credit");

const transactionAmounts = transactions.map(t => t.amount);

const finalBalance = transactions.reduce(
  (balance, t) =>
    t.type === "credit" ? balance + t.amount : balance - t.amount,
  0
);

const firstDebit = transactions.find(t => t.type === "debit");

const indexOf10000 = transactions.findIndex(t => t.amount === 10000);

console.log(creditTransactions);
console.log(transactionAmounts);
console.log(finalBalance);
console.log(firstDebit);
console.log(indexOf10000);
