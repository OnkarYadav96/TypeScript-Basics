"use strict";
let updateTodo = {
    completed: true,
};
let myTodo = {
    title: "Learn TypeScript",
    description: "Completed Tutorial",
    completed: false,
    createdAt: new Date()
};
let pages = {
    home: { title: "Home", url: "/" },
    about: { title: "About", url: "/about" },
    contact: { title: "Contact", url: "/contact" }
};
// Return type - extract return type of function
function createUser() {
    return {
        id: 1,
        name: "Onkar",
        email: "onkaryadav@gmail.com"
    };
}
