function isSolved(board) {
    for (let row = 0; row < 3; row++) {
      if (
        board[row][0] !== 0 &&
        board[row][0] === board[row][1] &&
        board[row][0] === board[row][2]
      ) {
        return board[row][0];
      }
    }
    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] !== 0 &&
        board[0][col] === board[1][col] &&
        board[0][col] === board[2][col]
      ) {
        return board[0][col];
      }
    }
    if (
      board[0][0] !== 0 &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]
    ) {
      return board[0][0];
    }
    if (
      board[0][2] !== 0 &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0]
    ) {
      return board[0][2];
    }
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row][col] === 0) {
          return -1;
        }
      }
    }
    return 0;
  }