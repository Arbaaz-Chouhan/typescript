"use strict";
// 1. Boolean Type
let isLoggedIn = true; // Sirf true ya false assign kar sakte hain
isLoggedIn = false; // Valid
isLoggedIn = "yes"; // Error: Type 'string' is not assignable to type 'boolean'
console.log(isLoggedIn);
//  Conditional Statements me Boolean ka Use
let isAdmin = true;
if (isAdmin) {
    console.log("Welcome, Admin!");
}
else {
    console.log("Access Denied.");
}
//  Boolean Functions:
function checkEven(num) {
    return num % 2 === 0; // Even number hai to true return karega
}
console.log(checkEven(4)); // Output: true
console.log(checkEven(5)); // Output: false
// 2. Bigint Type
let bigNum = 123456789123456789123456789n; // `n` lagana zaruri hai
bigNum = bigNum + 1n; // Bigint values ke saath sirf bigint ka hi use kar sakte hain
bigNum = 123; // Error: Type 'number' is not assignable to type 'bigint'
console.log(bigNum);
// Arithmetic Operations me Bigint ka Use
let a = 1000000000000000000n;
let b = 2000000000000000000n;
let sum = a + b; // Addition
let product = a * b; // Multiplication
console.log(sum); // Output: 3000000000000000000n
console.log(product); // Output: 2000000000000000000000000000000000000n
//Comparisons me Bigint ka Use
let num1 = 500n;
let num2 = 300n;
if (num1 > num2) {
    console.log("num1 is greater");
}
else {
    console.log("num2 is greater");
}
