"use strict";
// Generic with arrays
function getFirstElement(arg) {
    return arg;
}
let myNum = getFirstElement("Onkar");
let myName = getFirstElement(100);
// Generic with Array
function getSecondElement(arr) {
    return arr[0];
}
let myNum1 = getSecondElement([1, 2, 3]);
let myName1 = getSecondElement(["Onkar", "Rahul"]);
let stringNumberPair = {
    key: "age",
    value: 27
};
// Generic Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter((i) => i !== item);
    }
    getItems() {
        return [...this.data];
    }
}
let textStorage = new DataStorage();
textStorage.addItem("Hello");
function logLength(arg) {
    console.log(arguments.length);
    return arg;
}
logLength("Hello"); //Ok
logLength([1, 2, 3]); //OK
// logLength(100) //Error  
