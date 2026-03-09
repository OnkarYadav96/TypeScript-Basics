// Primitive
let username:string="Onkar";
let age:number=29;
let isAdmin:boolean=true;

// Arrays
let numbers:number[]=[1,2,3,4,5]
let names:string[]=["Onkar","Yadav"];

// Tuples
let person:[string,number]=["Onkar",29];

// Enum
enum Color{Red,Green,Blue}
let favoriteColor:Color=Color.Blue

// Any(avoid when possible)
let randomValue:any=10;
randomValue="Onakr"
randomValue=true;

// Unknown (safer than "any" above)
let userInput:unknown;
userInput=5;
userInput="text"

// Void (for functions that do not return a value)
function subscribe(message:string):void{
    console.log("Hello Onkar");
    // return "Hello";
}

// Null & Undefined
let nullValue:null=null;
let undefinedValue:undefined=undefined