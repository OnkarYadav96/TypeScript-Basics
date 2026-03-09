"use strict";
// Type assertions (put/assign type explicitly)
let someValue = "Subscribe to RoadSide Coder";
let strLength = someValue.length;
// or
let strLength2 = someValue.length;
// Type guards
function processValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase;
    }
    else {
        console.log(value.toFixed(2));
    }
}
// instanceof type guard
class Dog1 {
    bark() {
        console.log("Woof!");
    }
}
class Cat2 {
    meow() {
        console.log("Meoww!");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog1) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
