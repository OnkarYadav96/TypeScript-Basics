"use strict";
// Object type annotation
let user = {
    name: "Onkar",
    age: 29
};
let user1 = {
    name: "Onkar1",
    age: 29,
    email: "onkar@gmail.com",
    id: 3
};
let laptop = {
    name: "MacBook Pro",
    price: 2000,
    getDiscount(percentage) {
        return this.price * (percentage / 1000);
    }
};
