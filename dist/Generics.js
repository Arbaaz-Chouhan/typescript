"use strict";
// 1. Generics with function
function getValue(item) {
    return item;
}
console.log(getValue(99));
console.log(getValue("arbaaz"));
function getItems(items) {
    return items;
}
console.log(getItems([1, 2, 3]));
console.log(getItems(["a", "b", "c"]));
let stringBox = { content: "Hello" }; // T = string
let numberBox = { content: 123 }; // T = number
console.log(stringBox);
console.log(numberBox);
