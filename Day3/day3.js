// // console.log(10+3);
// // console.log(10%3);
// // console.log(2**8);
// // console.log(42 % 2 === 8);

// // let x=5;
// // console.log(x+=5);
// // console.log(x-=3);
// // console.log(x*2);
// // console.log(x/=24);

// //COMPARISON

// // console.log(5 == "5");
// // console.log(5 === "5");
// // console.log(0 == false);
// // console.log(0 === false);
// // console.log(null == undefined);

// // const x=5;
// // const y=0;

// // console.log(x == "5");
// // console.log(x === "5");
// // console.log(y == false);
// // console.log(y === false);
// // console.log(null == undefined);

// //LOGICAL OPERATOR

// let x= true;
// let y= false;
// console.log(x && y);

// let a= false;
// let b= true;
// console.log(a || b);

// console.log(!x);
// console.log(!y);

//TERNARY OPERATOR
// const age=20;
// const status = age >= 18 ? "adult" : "minor";
// console.log(status);

// const score = 50;
// const result = score >40 ? "Pass" : "Fail";
// console.log(result);

//OPTIONAL CHAINING
const order = {
  id: 123,
  customer: {
    name: "Alice",
    address: {
      city: "New York"
    }
  }
};
 console.log(order?.customer?.address?.city?.phone);