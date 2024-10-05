def is_solved(board):
    for row in board:
        if row[0] == row[1] == row[2] and row[0] != 0:
            return row[0]
    
    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] and board[0][col] != 0:
            return board[0][col]
    
    if board[0][0] == board[1][1] == board[2][2] and board[0][0] != 0:
        return board[0][0]
    if board[0][2] == board[1][1] == board[2][0] and board[0][2] != 0:
        return board[0][2]
    
    for row in board:
        if 0 in row:
            return -1
        
    return 0
