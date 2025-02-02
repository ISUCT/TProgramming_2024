function moveZeros(arr) {
    let len = arr.length;
    for (let counter = 0; counter <= len; counter++) {
        x = arr[counter];
        if (x == 0 && x !== false && x !== '0' && x.length !== 0) {
            arr.splice(counter, 1);
            arr.push(0);
            counter--;
            len--;
        }
    }
    return arr;
}
