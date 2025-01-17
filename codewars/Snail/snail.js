function snail(matrix) {
    if (matrix.length === 0) return [];
    const total = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    let top = 0, bottom = rows - 1;
    let left = 0, right = cols - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            total.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            total.push(matrix[i][right]);
        }
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                total.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                total.push(matrix[i][left]);
            }
            left++;
        }
    }
    return total;
}