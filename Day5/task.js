for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

let sum = 0;
let i = 1;

while (i <= 100) {
  sum += i;
  i++;
}
console.log(sum);

const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];


for (const name of names) {
  console.log(name);
}

let count = 0;

for (const name of names) {
  if (name.length > 4) {
    count++;
  }
}

console.log("Names longer than 4 characters:", count);