function findMissingLetter(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let currentCharCode = array[i].charCodeAt(0);
        let nextCharCode = array[i + 1].charCodeAt(0);
        
        if (nextCharCode - currentCharCode > 1) {
            return String.fromCharCode(currentCharCode + 1);
        }
    }
    return null;
}
