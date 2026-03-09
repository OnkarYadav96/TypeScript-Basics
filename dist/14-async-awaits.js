"use strict";
// Promises wih TypeScript
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: "Onkar" });
        }, 1000);
    });
}
;
// Async-await
async function getUserData(id) {
    try {
        const user = await fetchUser(id);
        console.log(user.name);
    }
    catch (error) {
        console.error("Error fetching user:", error);
    }
}
// Generic async function
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}
fetchData("Hello Onkar");
