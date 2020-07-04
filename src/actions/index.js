// const INCREASE_ROW      = "INCREASE_ROW";
// const DECREASE_ROW      = "DECREASE_ROW";
// const INCREASE_SQUARE   = "INCREASE_SQUARE";
// const DECREASE_SQUARE   = "DECREASE_SQUARE";

let rowCount    = 10;
let squareCount = 10;
export const addRow         = ({
    type    : "ADD_ROW",
    rows    : rowCount++,
});

export const subtractRow    = ({
    type    : "SUBTRACT_ROW",
    rows    : rowCount--,
});

export const addSquare      = ({
    type    : "ADD_SQUARE",
    squares : squareCount++,
});

export const subtractSquare    = ({
    type    : "SUBTRACT_SQUARE",
    squares : squareCount--,
});

