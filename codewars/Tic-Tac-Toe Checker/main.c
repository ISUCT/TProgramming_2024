#include <stdbool.h>

enum game_state {
    NOT_FINISHED = -1, DRAW = 0, X_WON = 1, O_WON = 2
};

enum square { EMPTY = 0, X = 1, O = 2 };

enum game_state check_game_state (const enum square board[3][3])
{
    int verIntersectionCount[3][3] = { 0 };
    int horIntersectionCount[3][3] = { 0 };

    bool boardHasEmptyCells = false;

    for(int y = 0; y < 3; ++y)
        for(int x = 0; x < 3; ++x) {
            enum square kind = board[y][x];
            
            if(kind == EMPTY) {
                boardHasEmptyCells = true;
                continue;
            }

            if(++verIntersectionCount[x][kind] >= 3)
                return kind; // *square* maps to *game_state* dircectly.

            if(++horIntersectionCount[y][kind] >= 3)
                return kind;
        }

    // It's needed to check diagonals only
    enum square center = board[1][1];
    if(center != EMPTY)
        for(int diagonal = 0; diagonal < 3; diagonal += 2)
            if(
                    center == board[0][diagonal] && 
                    center == board[2][2 - diagonal]
                    )
                return center;

    return boardHasEmptyCells ? NOT_FINISHED : DRAW;
}
