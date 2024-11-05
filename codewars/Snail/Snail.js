snail = function(array) {
    if (array.length === 0 || array[0].length === 0) {
        return [];
    }

    const result = [];
    let top = 0;
    let bottom = array.length - 1;
    let left = 0;
    let right = array[0].length - 1;

    while (top <= bottom && left <= right) {
       
        for (let i = left; i <= right; i++) {
            result.push(array[top][i]);
        }
        top++;

       
        for (let i = top; i <= bottom; i++) {
            result.push(array[i][right]);
        }
        right--;

        if (top <= bottom) {
           
            for (let i = right; i >= left; i--) {
                result.push(array[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
           
            for (let i = bottom; i >= top; i--) {
                result.push(array[i][left]);
            }
            left++;
        }
    }

    return result;
};