"use strict";
// 1.Example 
class Person {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const data1 = new Person("Arbaaz", 20, ["coding", "cricket"]);
const data2 = new Person("fayyaz", 15, ["swing", "football"]);
const data3 = new Person("micail", 24, ["rest", "play"]);
const data4 = new Person("anis", 23, ["profesnaol crickter", "fast boller"]);
const data5 = new Person("faruk", 20, ["famouse", "softwear enginner"]);
console.log(data1);
console.log(data2);
console.log(data3);
console.log(data4);
console.log(data5);
// 2.Example 
class Teachers {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    detail() {
        console.log(`hello my name is ${this.name} and my age ${this.age} and my hobbies ${this.hobbies}`);
    }
}
class Student extends Teachers {
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `i am in grade ${this.grade}`;
    }
}
let response = new Student("arbaaz", 30, ["coding", "cricket"], 999);
console.log(response.introduce());
// 3.Example 
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const res = new Person2("Arbaaz", 25);
console.log(res.greet()); // Output: Hello, my name is Arbaaz and I am 25 years old.
// SortHand Properties in classes
class Short {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
let propteties = new Short("Arbaaz", 20, ["cricket", "coding"]);
console.log(propteties);
// --------------------------------
// Static Property and method:
class Bank {
    constructor(accountHolder) {
        this.accountHolder = accountHolder;
        Bank.totalAccounts++; // Har nayi account ke liye count badhao
    }
    // Static method to get total accounts
    static getTotalAccounts() {
        return Bank.totalAccounts;
    }
}
// Static property to track total accounts
Bank.totalAccounts = 0;
// New accounts created
const account1 = new Bank("Arbaaz");
const account2 = new Bank("Ali");
// Static method ka use bina object banaye
console.log(Bank.getTotalAccounts()); // Output: 2
// -------------------------------
class MathUtils {
    // Static method for addition
    static add(a, b) {
        return a + b;
    }
    // Static method for multiplication
    static multiply(a, b) {
        return a * b;
    }
}
// Direct access without creating an object
console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.multiply(4, 7)); // Output: 28
