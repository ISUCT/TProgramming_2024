function mergeArrays(array1, array2) {
    let combinedResult = [];
    let index1 = 0;
    let index2 = 0;

    while (index1 < array1.length || index2 < array2.length) {
        if (index1 < array1.length) {
            combinedResult.push(array1[index1]);
            index1 += 1;
        }
        if (index2 < array2.length) {
            combinedResult.push(array2[index2]);
            index2 += 1;
        }
    }
    return combinedResult;
}

const array2 = ['a', 'b', 'c', 'd', 'e', 'f'];
const array1 = [1, 2, 3];
console.log(mergeArrays(array1, array2));
