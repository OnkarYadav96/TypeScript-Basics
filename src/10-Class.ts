class Person {
    // Properties
    private name: string;
    protected age: number;
    public email: string


    // constructor
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email
    }

    // Methods
    public introduce(): string {
        return `Hi,I am ${this.name} and I'm ${this.age} year old.`;
    }


    // Getters
    public getName(): string {
        return this.name;
    }

    // Setter
    public setName(name: string): void {
        this.name = name;
    }

}


// Another way to write Class and Constructor
class Employee {
    constructor(
        private id: number,
        public name: string,
        protected department: string,
        // public readonly salary: number
    ) { }


    getDetails(): string {
        return `${this.name} works in ${this.department} `
    }
}

let onkar = new Employee(101, "Onkar", "IT");
console.log(onkar.getDetails());


// Inheritance 
// only Public and Private variables can be extended not a protected

class Manager extends Employee{
    constructor(
        id:number,
        name:string,
        department:string,
        private teamSize:number
    ){
        super(id,name,department);
    }


    getTeamInfo():string{
        return `${this.name} manages ${this.teamSize} people in ${this.department}`
    }
}

