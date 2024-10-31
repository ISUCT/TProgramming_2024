def is_solved(board):
    def check_line(a, b, c):
        return a if a != 0 and a == b and a == c else None
    for i in range(3):
        if check_line(board[i][0], board[i][1], board[i][2]):
            return board[i][0]
        if check_line(board[0][i], board[1][i], board[2][i]):
            return board[0][i]
    if check_line(board[0][0], board[1][1], board[2][2]):
        return board[0][0]
    if check_line(board[0][2], board[1][1], board[2][0]):
        return board[0][2]
    for i in range(3):
        for j in range(3):
            if board[i][j] == 0:
                return -1
    return 0