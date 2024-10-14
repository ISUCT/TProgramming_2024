enum game_state {
    NOT_FINISHED = -1, DRAW = 0, X_WON = 1, O_WON = 2
};

enum square { EMPTY = 0, X = 1, O = 2 };

enum game_state check_game_state (const enum square board[3][3])
{
    if (board[0][0]!=0 && (board[0][0]==board[0][1] && board[0][0]==board[0][2] ||
        board[0][0]==board[1][0] && board[0][0]==board[2][0] ||
        board[0][0]==board[1][1] && board[0][0]==board[2][2] )) return board[0][0];
    if (board[0][1]!=0 && (board[0][1]==board[0][0] && board[0][1]==board[0][2] ||
        board[0][1]==board[1][1] && board[0][1]==board[2][1] )) return board[0][1];
    if (board[0][2]!=0 && (board[0][2]==board[0][0] && board[0][2]==board[0][1] ||
        board[0][2]==board[1][2] && board[0][2]==board[2][2] ||
        board[0][2]==board[1][1] && board[0][2]==board[2][0] )) return board[0][2];
    if (board[1][0]!=0 && (board[1][0]==board[0][0] && board[1][0]==board[2][0] ||
        board[1][0]==board[1][1] && board[1][0]==board[1][2] )) return board[1][0];
    if (board[1][1]!=0 && (board[1][1]==board[0][0] && board[1][1]==board[2][2] ||
        board[1][1]==board[0][2] && board[1][1]==board[2][0] ||
        board[1][1]==board[0][1] && board[1][1]==board[2][1] ||
        board[1][1]==board[1][0] && board[1][1]==board[1][2] )) return board[1][1];
    if (board[1][2]!=0 && (board[1][2]==board[0][2] && board[1][2]==board[2][2] ||
        board[1][2]==board[1][0] && board[1][2]==board[1][1] )) return board[1][2];
    if (board[2][0]!=0 && (board[2][0]==board[0][0] && board[2][0]==board[1][0] ||
        board[2][0]==board[2][1] && board[2][0]==board[2][2] ||
        board[2][0]==board[1][1] && board[2][0]==board[0][2] )) return board[2][0];
    if (board[2][1]!=0 && (board[2][1]==board[0][1] && board[2][1]==board[1][1] ||
        board[2][1]==board[2][0] && board[2][1]==board[2][2] )) return board[2][1];
    if (board[2][2]!=0 && (board[2][2]==board[2][0] && board[2][2]==board[2][1] ||
        board[2][2]==board[0][2] && board[2][2]==board[1][2] ||
        board[2][2]==board[0][0] && board[2][2]==board[1][1] )) return board[2][2];

    int c = 0;
    for (int i = 0; i < 3; i++) for (int j = 0; j < 3; j++) if (board[i][j] == 0) c++;
    if (c == 0) return 0; else return -1;
}
