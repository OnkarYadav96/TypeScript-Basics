// Interfaces
interface User {
    name: string;
    age: number;
    email?: string;    //Optional property
    readonly id: number //readonly property (We can not change readonly property)
}


// Object type annotation
let user: { name: string, age: number } = {
    name: "Onkar",
    age: 29
}

let user1: User = {
    name: "Onkar1",
    age: 29,
    email: "onkar@gmail.com",
    id: 3
}

// user1.id=5   // Not possible to change because it is read only property


// Interface with methods
interface Product {
    name: string,
    price: number,
    getDiscount(percent: number): number
}

let laptop: Product = {
    name: "MacBook Pro",
    price: 2000,
    getDiscount(percentage: number): number {
        return this.price * (percentage / 1000);
    }
}