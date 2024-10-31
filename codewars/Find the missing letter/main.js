function findMissingLetter(array) {
    const string = array.join('');
    
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i + 1) - string.charCodeAt(i) !== 1) {
            return String.fromCharCode(string.charCodeAt(i) + 1);
        }
    }
}
