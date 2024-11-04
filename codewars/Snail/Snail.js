function snail(array) {
    let top = 0;
    let bottom = array.length - 1;
    let left = 0;
    let right = array[0].length - 1;
    const answer = [];

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            answer.push(array[top][i]);
        }
        top++;


        for (let i = top; i <= bottom; i++) {
            answer.push(array[i][right]);
        }
        right--;

        if (top <= bottom && left <= right) {
            for (let i = right; i >= left; i--) {
                answer.push(array[bottom][i]);
            }
            bottom--;

            for (let i = bottom; i >= top; i--) {
                answer.push(array[i][left]);
            }
            left++;
        }
    }

    return answer;
}
