function Solve(board) {
    function allEqual(arr) {
        return arr.every(val => val === arr[0] && val !== 0);
    }

    for (let row of board) {
        if (allEqual(row)) {
            return row[0];
        }
    }

    for (let col = 0; col < 3; col++) {
        let column = [board[0][col], board[1][col], board[2][col]];
        if (allEqual(column)) {
            return column[0];
        }
    }

    let diag1 = [board[0][0], board[1][1], board[2][2]];
    let diag2 = [board[0][2], board[1][1], board[2][0]];
    if (allEqual(diag1)) {
        return diag1[0];
    }
    if (allEqual(diag2)) {
        return diag2[0];
    }

    for (let row of board) {
        if (row.includes(0)) {
            return -1;
        }
    }
 
    return 0;
}

let board = [
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0]
];

console.log(Solve(board)); 