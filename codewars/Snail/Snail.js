snail = function(array) {
    n = array[0].length;
    if (!n) return [];
    let topWall = 0, bottWall = n-1,leftWall = 0, rightWall = n-1;
    let ansArray = [];
    while (bottWall >= topWall && rightWall >= leftWall){
        for (let i = leftWall; i <= rightWall; i++) {
            ansArray.push(array[topWall][i]);
        } topWall ++;
        for (let i = topWall; i<=bottWall; i++) {
            ansArray.push(array[i][rightWall]);
        } rightWall --;
        if (topWall <= bottWall) {
            for (let i = rightWall; i>= leftWall; i--) {
                ansArray.push(array[bottWall][i])
            } bottWall --;
        }
        if (leftWall <= rightWall) {
            for (let i = bottWall; i >= topWall; i--) {
                ansArray.push(array[i][leftWall])
            } leftWall ++;
        }
    }
    return ansArray;
  }