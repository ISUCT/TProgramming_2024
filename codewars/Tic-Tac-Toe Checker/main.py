def is_solved(board):
    bb = ''.join([str(x) for y in board for x in y])
    winning_stage = [
        bb[:3], bb[3:6] , bb[6:],
        bb[:7:3], bb[1:8:3], bb[2::3],
        bb[::4], bb[2:7:2]
    ]
    if '111' in winning_stage:
        return 1
    elif '222' in winning_stage:
        return 2
    else:
        if '0' in bb:
            return -1
        else:
            return 0