function isSolved(board) {
  let flatArr = Array(9).fill(0);
  let winningCombs = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board.length; j++) {
      if(board[i][j] == 1) {
        flatArr[i + j * 3] = 1;
      }
      
      if(board[i][j] == 2) {
        flatArr[i + j * 3] = 2;
      }
    }
  }
  
  for(let i = 0; i < winningCombs.length; i++) {
    let count1 = 0;
    let count2 = 0;
    for(let j = 0; j < winningCombs[i].length; j++) {
      if(flatArr[winningCombs[i][j]] == 1) {
        count1++;
      }
      
      if(flatArr[winningCombs[i][j]] == 2) {
        count2++;
      }
    }
    
    if(count1 == 3) {
      return 1;
    }
    
    if(count2 == 3) {
      return 2;
    }
  }
  
  if(flatArr.includes(0)) {
    return -1;
  }
  else {
    return 0;
  }
}