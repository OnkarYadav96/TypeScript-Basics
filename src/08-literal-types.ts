// String literal types
let direction:"north" | "south" | "east" | "west";
// direction="np"
direction="north"

// Numeric literal types
let diceRoll:1|2|3|4|5|6;

// Combining with other types
type SuccessResponse={
    status:'success';
    data:any;
}

type ErrorResponse={
    status:'error';
    error:string;
}

type ApiResponse=SuccessResponse|ErrorResponse