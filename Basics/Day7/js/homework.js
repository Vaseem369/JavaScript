// const names = ["Priya", "Aarav", "Riya"];
// const greet = names.map(name => "hello " + name);
// console.log(greet);

// // HOMEWORK 2
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const evenNumbers = numbers.filter(num => num % 2 === 0);

// const evenSum = evenNumbers.reduce((sum, num) => sum + num, 0);

// console.log(evenNumbers);
// console.log(evenSum);

//HOMEWORK 3
const arr = [3, 1, 4, 1, 5, 9, 2, 6];

// Using Math.max
// const max1 = Math.max(...arr);

// console.log(max1);

// // Using reduce
// const max2 = arr.reduce((max, num) => {
//   return num > max ? num : max;
// });

// console.log(max2);

function average(array) {
  const sum = array.reduce((total, num) => total + num, 0);

  return sum / array.length;
}

console.log(average([10, 20, 30, 40]));