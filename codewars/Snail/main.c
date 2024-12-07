#include <stdlib.h>
#include <stdbool.h>

static inline int max(int a, int b) {
    // In theory, we can omit *if* condition and get min only with bit 
    // operations but I'm not sure if this is faster solution.
    return a > b ? a : b;
}

static inline int min(int a, int b) {
    // In theory, we can omit *if* condition and get min only with bit 
    // operations but I'm not sure if this is faster solution.
    return a < b ? a : b;
}

int *snail(size_t *outsz, const int **mx, size_t rows, size_t cols) {
    // [Original comments]
    // The numbers of rows and cols are passed separately for historical reasons
    // Return a heap allocated array, report the size in *outsz

    // [Solution]
    // We assume that *rows* = *cols* as it's said in the task.
    // Let declare our list
    int itemCount = rows * cols;
    int* list = malloc(sizeof(int) * (*outsz = itemCount));
    
    typedef int Direction[2];

    Direction directions[4] = {
        { +1,  0 },
        {  0, +1 },
        { -1,  0 },
        {  0, -1 } 
    };

    // Current cell coordinates.
    int x = 0, y = 0;

    // Which direction we're using now.
    int directionIndex = 0;

    // Let's look at the grid geometry
    // ...........*
    // *.........*.
    // .*.......*..
    // .*........*.
    // *..........*
    //
    // All of the control point I have denoted by '*' symbol.
    // They are located at the diagonal. Only left right leaf is offseted by
    // one cell down.
    //
    // Our main idea is to detect when we're at the control point to switch
    // the direction.
    
    for(int _ = 0; _ < itemCount; ++_) {

        // Let flush our value to the list.
        // Row = y, Column = x
        list[_] = mx[y][x];

        // Next we should step in the given direction.
        Direction* direction = &directions[directionIndex];
        x += (*direction)[0];
        y += (*direction)[1];

        // Let calculate control point candidates.
        // We'll calculate control point position for given *y* coordinate.
        int rightLeaf = max(
                rows - y - 1,             // upper leaf
                rows - (cols - y - 1) - 1 // downer(???) leaf
                );

        int leftLeaf = min(
                y - 1,       // upper leaf (taking offset into account)
                cols - y - 1 // downer(???) leaf
                );

        // Now we should change direction if we're at the control point.
        // XXX: Which is better: | (bitwise) or || (conditional)?
        //      Which is faster?
        bool weAreAtTheControlPoint = x == leftLeaf | x == rightLeaf;

        directionIndex = 
            (directionIndex + weAreAtTheControlPoint) & 3; // Instead of % 3.
    }
    
    return list;
}