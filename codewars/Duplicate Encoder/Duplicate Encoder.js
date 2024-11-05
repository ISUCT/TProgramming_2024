function duplicateEncode(word)   {
    const lowerWord = word.toLowerCase();
    const charCount = {};
    let result = '';

    for (const char of lowerWord) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of lowerWord) {
        result += charCount[char] === 1 ? '(' : ')';
    

    }

}