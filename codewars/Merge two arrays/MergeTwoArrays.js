function mergeArrays(a, b) {
    const maxLen = a.length + b.length;
    let answer = [];
    if (maxLen % 2 == 1) {
        for (let i = 0; i <= maxLen / 2; i++) {
            answer.push(a[i]);
            answer.push(b[i]);
        }
    } else {
        for (let i = 0; i < maxLen / 2; i++) {
            answer.push(a[i]);
            answer.push(b[i]);
        }
    }
    return answer.filter(item => item !== undefined);
}
