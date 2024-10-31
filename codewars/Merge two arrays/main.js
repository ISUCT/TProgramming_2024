function mergeArrays(arr1, arr2) {
    const result = []; 
    const maxLength = Math.max(arr1.length, arr2.length); 

    
    for (let i = 0; i < maxLength; i++) {
        
        if (i < arr1.length) {
            result.push(arr1[i]);
        }
        
        
        if (i < arr2.length) {
            result.push(arr2[i]);
        }
    }

    return result; 
}


console.log(mergeArrays(['j', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]));


console.log(mergeArrays([1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f']));