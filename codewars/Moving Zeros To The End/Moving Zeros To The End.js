function moveZeros(arr) {
    const result = [];
    let zeroCount = 0;

    for (const element of arr) {
        if (element === 0) {
            zeroCount++;
        } else {
            result.push(element);
        }
    }

    for (let i = 0; i < zeroCount; i++) {
        result.push(0);
    }

    return result;
}