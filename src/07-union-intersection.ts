// Union types (OR)
type Status="pending"|"approved"|"rejected"

function setStatus(status:Status):void{
    console.log(`${status}`)
}

setStatus("approved")



// intersection types (AND)
interface Colorful{
    color:string;
}
interface Circle{
    radius:number;
}

type ColorfulCircle=Colorful & Circle

let myCircle:ColorfulCircle={
    color:"red",
    radius:10
}