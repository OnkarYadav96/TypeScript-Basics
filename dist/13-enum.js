"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
let dir = Direction.Right; //4 because it is assigned 1 to up and down
// String Enum
var Status1;
(function (Status1) {
    Status1["Pending"] = "PENDING";
    Status1["Approved"] = "APPROVED";
    Status1["Rejected"] = "REJECTED";
})(Status1 || (Status1 = {}));
let stat = Status1.Approved;
function handleResponse(status) {
    if (status === 200 /* HttpStatus.Success */) {
        console.log("Sucess!");
    }
}
