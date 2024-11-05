function isSolved(board) {
    function checkWinner(player) {
      for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
          return true;
        }
      }
      for (let i = 0; i < 3; i++) {
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
          return true;
        }
      }
      if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
      }
      if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
      }
      return false;
    }
  
    if (checkWinner(1)) return 1; // Игрок 1 победил
    if (checkWinner(2)) return 2; // Игрок 2 победил
  
    for (let row of board) {
      for (let cell of row) {
        if (cell === 0) {
          return -1; // Игра продолжается
        }
      }
    }
  
    return 0; // Ничья
  }