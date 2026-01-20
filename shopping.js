const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

const inStockProducts = cart.filter(item => item.inStock);

const productTotals = inStockProducts.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));

const grandTotal = inStockProducts.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

const mouseDetails = cart.find(item => item.name === "Mouse");

const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");

console.log(inStockProducts);
console.log(productTotals);
console.log(grandTotal);
console.log(mouseDetails);
console.log(keyboardIndex);
