function mergeArrays(a, b) {
    const result = [];
    const maxLength = Math.max(a.length, b.length);
    for (let i = 0; i < maxLength; i++) {
       if (i < a.length) {
           result.push(a[i]);
       }
       if (i < b.length) {
           result.push(b[i]);
          }
       }
    return result;
  }
  console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']));
  console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]));
  console.log(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']));
  console.log(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]));