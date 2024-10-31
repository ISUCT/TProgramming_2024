const { join } = require("path");

function permutations(string) {
    let answer = [];
    if (string.length == 1) {
        return answer.unshift(string);
    } else {
        string = string.split();
        answer.unshift(shuffleDurstenfeld(string));
        string = string.join();
        return permutations(string);
    }
}

function shuffleDurstenfeld(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log(permutations('aabb'))


}