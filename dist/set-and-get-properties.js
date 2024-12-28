"use strict";
class Person1 {
    constructor() {
        this._name = "";
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName.length > 3) {
            this._name = newName;
        }
        else {
            console.log("Name should have more than 3 characters.");
        }
    }
}
const result = new Person1();
result.name = "Arbaaz";
console.log(result.name);
result.name = "Ali";
class BankAccount {
    constructor() {
        this._balance = 0;
    }
    get balance() {
        return this._balance;
    }
    set balance(newBalance) {
        if (newBalance < 0) {
            console.log("Balance cannot be negative");
        }
        this._balance = newBalance;
    }
}
let account = new BankAccount();
account.balance = -10;
console.log(account.balance);
