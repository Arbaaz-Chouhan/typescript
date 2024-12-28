"use strict";
// 1: Without Type Annotation (Dynamic Object)
let person1 = { name: "Arbaaz", age: 25 }; // Object without type
console.log(person1.name); // Output: Arbaaz
// 2 : With Type Annotation
let person2 = {
    name: "Arbaaz",
    age: 25
};
console.log(person2.age); // Output: 25
let obj = {
    name: "Arbaaz Chouhan",
    age: 20,
    country: "India",
    phone_No: 221212121
};
console.log(obj.country);
let user1 = {
    name: "Arbaaz Chouhan",
    class: "12th", // Fixed syntax
    age: 20,
    address: "5v rod eidga",
    phone_No: 221212121,
};
console.log(user1); // {name: 'Arbaaz Chouhan',class: '12th',age: 20,address: '5v rod eidga',phone_No: 221212121}
console.log(user1.name); // Arbaaz Chouhan
let user2 = {
    name: "fayyaz",
    class: "10th", // Fixed syntax
    age: 15,
    address: "sostiget",
    phone_No: 3231313131,
};
console.log(user2); //{name: 'fayyaz',class: '10th',age: 15,address: 'sostiget', phone_No: 3231313131}
let user3 = {
    name: "furkan",
    class: "5th", // Fixed syntax
    age: 8,
    address: "choka",
    phone_No: 212155555,
};
console.log(user3); // {name: 'furkan',class: '5th',age: 8, address: 'choka',phone_No: 212155555 }
let cardItem = {
    item_name: "Ge",
    quantity: 500,
    price: 350,
};
let calculateTotalPrice = (product) => {
    return `${product.item_name} total cost is ${product.price * product.quantity}`;
};
console.log(calculateTotalPrice(cardItem)); // Pass `cardItem` object
