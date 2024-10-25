function countElements(arr) {
    let count = 0; 

    for (let element of arr) { 
        count++; 
        if (Array.isArray(element)) { 
            count += countElements(element); 
        }
    }

    return count; 
}
