// Type assertions (put/assign type explicitly)
let someValue: unknown = "Subscribe to RoadSide Coder"
let strLength: number = (someValue as string).length;
// or
let strLength2: number = (<string>someValue).length;




// Type guards
function processValue(value: string | number) {
    if (typeof value === "string") {
        return value.toUpperCase
    }
    else {
        console.log(value.toFixed(2));
    }
}


// instanceof type guard
class Dog1{
    bark(){
        console.log("Woof!")
    }
}

class Cat2{
    meow(){
        console.log("Meoww!")
    }
}

function makeSound(animal:Dog1|Cat2){
 if(animal instanceof Dog1){
    animal.bark()
 }
 else{
    animal.meow()   
 }
}