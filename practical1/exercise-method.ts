/* ------------------------------------ 1 ----------------------------------- */
function getProductNames(products: { name: string; price: number }[]) {
  return products.map((item) => item.name);
}

console.log(
  getProductNames([
    { name: "Laptop", price: 1500 },
    { name: "Phone", price: 800 },
  ])
);

/* ------------------------------------ 2 ----------------------------------- */
function filterExpensive(products: { name: string; price: number }[]) {
  return products.filter((item) => item.price > 1000);
}

console.log(
  filterExpensive([
    { name: "Laptop", price: 1500 },
    { name: "Phone", price: 800 },
  ])
);

/* ------------------------------------ 3 ----------------------------------- */
function findUserByEmail(users: { name: string; email: string }[], targetEmail: string) {
  return users.find((user) => user.email === targetEmail);
}

console.log(
  findUserByEmail(
    [
      { name: "A", email: "a@mail.com" },
      { name: "B", email: "b@mail.com" },
    ],
    "b@mail.com"
  )
);

/* ------------------------------------ 4 ----------------------------------- */
function hasCompletedTask(tasks: { task: string; completed: boolean }[]) {
  return tasks.some((t) => t.completed === true);
}

console.log(
  hasCompletedTask([
    { task: "A", completed: false },
    { task: "B", completed: true },
  ])
);

/* ------------------------------------ 5 ----------------------------------- */
function allPassed(scores: number[]) {
  return scores.every((s) => s >= 70);
}

console.log(allPassed([80, 90, 70]));

/* ------------------------------------ 6 ----------------------------------- */
function getTotalPrice(cart: { name: string; price: number }[]) {
  return cart.reduce((total, item) => total + item.price, 0);
}

console.log(
  getTotalPrice([
    { name: "Shoes", price: 50 },
    { name: "Bag", price: 70 },
  ])
);

/* ------------------------------------ 7 ----------------------------------- */
