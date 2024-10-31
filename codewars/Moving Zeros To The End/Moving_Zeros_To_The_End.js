function moveZeros(array) {
    let nonZeroElements = [];
    let zeroElements = [];
    for (let element of array) {
        if (element === 0) {
            zeroElements.push(element);
        } else {
            nonZeroElements.push(element);
        }}
    return nonZeroElements.concat(zeroElements);
}