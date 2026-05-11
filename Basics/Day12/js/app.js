// import { PI, add, multiply } from "./mathUtils.js";

// console.log(PI);              // 3.14159
// console.log(add(2, 3));       // 5
// console.log(multiply(4, 5));  // 20

// // Rename on import with `as`
// import { add as sum } from "./mathUtils.js";
// console.log(sum(10, 20));     // 30

// // Bring everything in as a namespace
// import * as math from "./mathUtils.js";
// console.log(math.add(1, 2));  // 3
// console.log(math.PI);

//Import using SAME name
import { multiply } from "./mathUtils.js";
console.log(multiply(2, 3));

import { divide } from "./mathUtils.js";
console.log(divide(4,2));


//Import using CHANGED name
import { multiply as product } from "./mathUtils.js";
console.log(product(4, 5));
import { divide as division } from "./mathUtils.js";
console.log(divide(9,9));