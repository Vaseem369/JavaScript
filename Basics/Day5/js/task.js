// //TASK 1
// // for(let i=1;i<=10;i++){
// //   console.log("7 X ",i,"=" , `${7*i}`);
// // }

// //TASK 2
// // let sum=0;
// // let i=1;
// // while(i<=100){
// //   sum = sum + i;
// //   i++
// // }
// // console.log("sum = ", sum);

//  const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];


// for (const name of names) {
//   console.log(name);
// }

// let count = 0;

// for (const name of names) {
//   if (name.length > 4) {
//     count++;
//   }
// }

// console.log("Names longer than 4 characters:", count);
//BONUS
const student = {
   name: "Anaya", 
   age: 21, 
   city: "Jaipur", 
   course: "B.Tech" };
   for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}