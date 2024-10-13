def is_solved(board):
    if board[0][0] == board[0][1] == board[0][2] and board[0][0] != 0:
        return board[0][0]
    if board[1][0] == board[1][1] == board[1][2] and board[1][0] != 0:
        return board[1][0]
    if board[2][0] == board[2][1] == board[2][2] and board[2][0] != 0:
        return board[2][0]
    if board[0][0] == board[1][0] == board[2][0] and board[0][0] != 0:
        return board[0][0]
    if board[0][1] == board[1][1] == board[2][1] and board[0][1] != 0:
        return board[0][1]
    if board[0][2] == board[1][2] == board[2][2] and board[0][2] != 0:
        return board[0][2]
    if board[0][0] == board[1][1] == board[2][2] and board[0][0] != 0:
        return board[0][0]
    if board[0][2] == board[1][1] == board[2][0] and board[0][2] != 0:
        return board[0][2]
    if 0 in board[0] or 0 in board[1] or 0 in board[2]:
        return -1
    return 0