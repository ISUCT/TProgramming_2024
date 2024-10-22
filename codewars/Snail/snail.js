snail = function(array) {
    let result = [];
        while (array.length) {
        result = result.concat(array.shift());
        
        for (let i = 0; i < array.length; i++) {
            if (array[i].length) {
                result.push(array[i].pop());
            }
        }
     if (array.length) {
        result = result.concat(array.pop().reverse());
    }

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i].length) {
            result.push(array[i].shift());
        }
    }
}
     return result;
}
let array = [
    [1,2,3],
    [8,9,4],
    [7,6,5]
];

console.log(snail(array));