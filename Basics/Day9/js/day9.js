// const address = `MI Road
// Jaipur 302001
// Rajasthan`;
// console.log(address);

// const address = `MI Road \n
// Jaipur 302001 \n
// Rajasthan`;
// console.log(address);

const colors = ["red", "green", "blue"];

// Basic
const [first, second, third] = colors;
console.log(first, second, third);   // red green blue

// Skip with comma
const [, , last] = colors;
console.log(last);   

// With defaults in params — robust
const showInfo = ({ name = "Guest", role = "User" } = {}) =>
  `${role}: ${name}`;
console.log(showInfo());                // User: Guest
console.log(showInfo({ name: "Riya" })); // User: Riya
console.log(showInfo({ name: "Riya" })); // User: Riya
//console.log(showInfo({ name: "Riya" })); // User: Riya
console.log(showInfo({role: "Accociate" })); 