enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

let dir: Direction = Direction.Right; //4 because it is assigned 1 to up and down


// String Enum
enum Status1 {
    Pending = "PENDING",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}

let stat: Status1 = Status1.Approved;



// Const Enum
const enum HttpStatus {
    Success = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404
}

function handleResponse(status: HttpStatus): void {
    if (status === HttpStatus.Success) { console.log("Sucess!") }
}