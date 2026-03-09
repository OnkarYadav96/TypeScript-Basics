"use strict";
// Primitive
let username = "Onkar";
let age = 29;
let isAdmin = true;
// Arrays
let numbers = [1, 2, 3, 4, 5];
let names = ["Onkar", "Yadav"];
// Tuples
let person = ["Onkar", 29];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Blue;
// Any(avoid when possible)
let randomValue = 10;
randomValue = "Onakr";
randomValue = true;
// Unknown (safer than "any" above)
let userInput;
userInput = 5;
userInput = "text";
// Void (for functions that do not return a value)
function subscribe(message) {
    console.log("Hello Onkar");
    // return "Hello";
}
// Null & Undefined
let nullValue = null;
let undefinedValue = undefined;
