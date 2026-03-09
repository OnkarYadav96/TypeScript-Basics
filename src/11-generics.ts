// Generic with arrays
function getFirstElement<MyType>(arg: MyType): MyType {
    return arg;
}

let myNum = getFirstElement<string>("Onkar");
let myName = getFirstElement<number>(100)




// Generic with Array
function getSecondElement<T>(arr:T[]):T|undefined{
    return arr[0];
}

let myNum1=getSecondElement([1,2,3]);
let myName1=getSecondElement(["Onkar","Rahul"])


// Generic interfaces
interface keyValuePair<T,V>{
    key:T;
    value:V;
}

let stringNumberPair:keyValuePair<string,number>={
    key:"age",
    value:27
}


// Generic Classes
class DataStorage<T>{
    private data:T[]=[];

    addItem(item:T):void{
        this.data.push(item);
    }


    removeItem(item:T):void{
        this.data=this.data.filter((i)=>i!==item);
    }

    getItems():T[]{
        return [...this.data];  
    }
}

let textStorage= new DataStorage<string>();
textStorage.addItem("Hello");



function logLength<T extends {length:number}>(arg:T):T{
    console.log(arguments.length);
    return arg;
}

 logLength("Hello"); //Ok
logLength([1,2,3]) //OK
// logLength(100) //Error  
