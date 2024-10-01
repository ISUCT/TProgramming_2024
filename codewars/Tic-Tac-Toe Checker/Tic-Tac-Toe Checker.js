function isSolved(board) {
    let diagonalDightsFromLeft = new Set();
    let diagonalDightsFromRight = new Set();
    let zerosCheckers = 0;
    for(let [i11,i12,i21,i22]=[0,0,0,board.length-1]; i11 < 3; i11++,i12++,i21++,i22--) {
        diagonalDightsFromLeft.add(board[i11][i12]);
        diagonalDightsFromRight.add(board[i21][i22])
    }
    if ((diagonalDightsFromLeft.size === 1 && !diagonalDightsFromLeft.has(0))) return diagonalDightsFromLeft.has(1) ? 1 : 2;
    if ((diagonalDightsFromRight.size === 1 && !diagonalDightsFromRight.has(0))) return diagonalDightsFromRight.has(1) ? 1 : 2;
    let RawOrColumn = new Set();
    for (let i1 = 0; i1 < board.length; i1++) {
        for (let i2 = 0; i2 < board.length; i2++) {
            RawOrColumn.add(board[i1][i2])
        }
        if ((RawOrColumn.size === 1 && !RawOrColumn.has(0))) return RawOrColumn.has(1) ? 1 : 2;
        if (RawOrColumn.has(0)) zerosCheckers++;
        RawOrColumn.clear();
    }
    for (let i1 = 0; i1 < board.length; i1++) {
        for (let i2 = 0; i2 < board.length; i2++) {
            RawOrColumn.add(board[i2][i1])
        }
        if ((RawOrColumn.size === 1 && !RawOrColumn.has(0))) return RawOrColumn.has(1) ? 1 : 2;
        if (RawOrColumn.has(0)) zerosCheckers++;
        RawOrColumn.clear();
    }
    if (zerosCheckers) return -1;
    return 0;
  }

  console.log(isSolved([[2,2,2,2],[0,0,1,0],[0,1,0,0],[1,0,0,0]]))