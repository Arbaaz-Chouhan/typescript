"use strict";
// Array of Number
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
console.log(arr);
// array of
const arrof = Array.of("Arbaaz", "Anis", "Usman", "Faruk");
console.log(arrof);
// new array
const newarr = new Array(1, 2, 3, 4, 5, 6);
console.log(newarr);
// Array of String 
let str = ["Arbaaz", "Anis", "Usman", "faruk"];
console.log(str);
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
let string = ["arbaaz", "fayyaz"];
const arrnum = [1, 2, 3, 4, 5];
arrnum.push(6);
console.log(arrnum); // [1, 2, 3, 4, 5, 6]
arrnum.pop();
console.log(arrnum); // [1, 2, 3, 4, 5]
arrnum.unshift(0);
console.log(arrnum); // [0, 1, 2, 3, 4, 5]
arrnum.shift();
console.log(arrnum); // [1, 2, 3, 4, 5]
arrnum.forEach(num => console.log(num)); // Logs each number
for (const num of arrnum) {
    console.log(num); // Logs each number
}
const doubled = arrnum.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
const evenNumbers = arrnum.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
const index = arrnum.findIndex(num => num === 3);
console.log(index); // 2
const moreNumbers = [6, 7, 8];
const combined = arrnum.concat(moreNumbers);
console.log(combined); // [1, 2, 3, 4, 5, 6, 7, 8]
const [first, second, ...rest] = arrnum;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
