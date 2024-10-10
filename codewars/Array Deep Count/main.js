function deepCount(a){
    let count = 0;
    for (let elem of a){
        if(Array.isArray(elem)){
            count += 1
            count +=deepCount(elem);
        } else {
            count++;
        }

    }
    return count;
}

console.log(deepCount([[], 1, 2, 3]))