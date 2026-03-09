interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    assignedTo?: string;
}


// Partial - make all properties optional not required
type PartialTodo = Partial<Todo>;
let updateTodo: PartialTodo = {
    completed: true,
}


// Required -make all properties
type RequiredTodo = Required<Todo>;

// ReadOnly - make all properties readonly
type ReadOnlyTodo = Readonly<Todo>;
let myTodo: ReadOnlyTodo = {
    title: "Learn TypeScript",
    description: "Completed Tutorial",
    completed: false,
    createdAt: new Date()
};
// myTodo.completed=true;

// Pick- pick specific Properties
type TodoPreview = Pick<Todo, "title" | "completed">

// Omit -omit specific properties
type TodoWithoutDate = Omit<Todo, "createdAt">



// Record -construct object type with specific key and value type
type PageInfo = {
    title: string;
    url: string;
}

type Pages = "home" | "about" | "contact"

type Merged = Record<Pages, PageInfo>;

let pages: Merged = {
    home: { title: "Home", url: "/" },
    about: { title: "About", url:"/about"},
    contact:{title:"Contact",url:"/contact"}
}


// Return type - extract return type of function
function createUser(){
    return {
        id:1,
        name:"Onkar",
        email:"onkaryadav@gmail.com"
    }
}

type UserType= ReturnType<typeof createUser>;