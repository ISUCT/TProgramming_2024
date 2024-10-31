function deepCount(array) {
    let count = 0;

    function countElements(arr) {
        count += arr.length;
        for (const item of arr) {
            if (Array.isArray(item)) {
                countElements(item);
            }
        }
    }

    countElements(array);
    return count;
}
