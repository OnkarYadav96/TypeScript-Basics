// Type aliases
type Point={
    x:number;
    y:number;
};

let point:Point={x:10,y:20}

// Type alias for primitives
type ID=string | number

let userId:ID="Onkar123";
let productId:ID=1234567;


// Types alias ns Interface

// Interfaces can be extended, type aliases cannot

interface Animal{
    name:string;
}

interface Dog extends Animal{
    breed:string;
}

let myDog:Dog={
    name:"Buddy",
    breed:"Golden Retriever",
    age:4
}


// Interfaces can be declared Multiple types and will be merge into each other
interface Animal{
    name:string;
}

interface Animal{
    age:number
}

let dog:Animal={
    age:6,
    name:"Doggi"
}



// Use Interfaces for Object shapes
// type alias for union and intersection types
interface User{
    name:string;
    age:number;
}

type UserID= string | number