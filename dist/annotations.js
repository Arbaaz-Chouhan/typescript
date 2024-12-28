"use strict";
// 1. Variable Type Annotations
let name = "Arbaaz"; // Sirf string values allow hongi
name = 42; // Error: Type 'number' is not assignable to type 'string'
console.log(name);
// 2. Function Parameter aur Return Type
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15
console.log(add("5", 10)); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
// 3. Array Type Annotations
let numbers = [1, 2, 3];
numbers.push(4); // Valid
numbers.push("5"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
console.log(numbers);
// 4. Object Type Annotations
let person = {
    name: "Arbaaz",
    age: 25
};
person.age = 26; // Valid
person.name = 42; // Error: Type 'number' is not assignable to type 'string'
console.log(person);
let id;
id = 101; // Valid
id = "A123"; // Valid
id = true; // Error: Type 'boolean' is not assignable to type 'number | string'
console.log(id);
// 5 Any Type
let data = "Hello";
data = 123; // Valid
data = true; // Valid
console.log(data);
// 6 void 
function logMessage(message) {
    console.log(message); // Sirf console par print karega
}
logMessage("Hello, TypeScript!"); // Output: Hello, TypeScript!
