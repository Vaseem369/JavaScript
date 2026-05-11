//TASK 1
const cart = ["bread", "milk", "eggs"];
cart.push("butter");
console.log(cart);
cart.unshift("rice");
console.log(cart);
cart.pop();
console.log(cart);
cart.splice(1,1);
console.log(cart);

//TASK 2
// const scores = [88, 42, 75, 60, 91, 39, 55, 70];
// const pass=scores.filter(score => score>=60);
// console.log(pass);

// const fail=scores.find(score=>score<60);
// console.log(fail);

// console.log(scores.every(score=>score<60));
// console.log(scores.some(score=>score>90));

//TASK 3
const prices = [100, 250, 500, 1200, 80];
const updatedPrice=prices.map(price=>price*(18/100));
console.log("Old price = " ,prices);
console.log("Updated price", updatedPrice);
