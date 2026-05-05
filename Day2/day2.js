console.log(typeof "Hello");
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 34567890876543n);
console.log(typeof 34567890876543234567890n);
//Type coersion
console.log(5 + "3");
console.log("5" + 3);
console.log("10" - 4);
console.log(10 - 4);
console.log("6" * 3);
console.log(true + 1);// true = 1
console.log(false + 1);//false = 0
//Explicit conversion
console.log(Number("42"));
console.log(Number("3.14"));
console.log(Number("Hello"));
console.log(Number(true));
console.log(String(true));
console.log(String(null));
console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean("Hello"));
console.log(Boolean(42));
console.log("-----------------------");


let greeting ="Hello JavaScript!";
console.log(greeting.includes("JavaScript!"));
console.log("-----------------------");

console.log(greeting.includes("Python"));
console.log(greeting.slice(0,5));

//TASK1
let name="Vaseem";
let age=24;
let associate=true;
console.log("Name",name, typeof name);
console.log(age, typeof age);
console.log(associate, typeof associate);