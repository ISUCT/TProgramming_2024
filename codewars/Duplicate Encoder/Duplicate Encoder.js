function duplicateEncode(word) {
    let lowWord = word.toLowerCase();
    let Count = {};

    for (const char of lowWord) {
        Count[char] = (Count[char] || 0) + 1;
    }
    let result = '';
    for (const char of lowWord) {
        result += Count[char] === 1 ? '(' : ')';
    }

    return result;
}
