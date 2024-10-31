function duplicateEncode(word) {
    const lowerWord = word.toLowerCase();
    let result = '';
    
    for (let i = 0; i < lowerWord.length; i++) {
        const char = lowerWord[i];
    
        if (lowerWord.split(char).length === 2) {
            result += '(';
        } else {
            result += ')';
        }
    }
    
    return result;
}