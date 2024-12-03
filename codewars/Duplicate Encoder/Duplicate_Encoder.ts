export function duplicateEncode(word: string): string {
    const lowerCaseWord = word.toLowerCase();
    const charCount: { [key: string]: number } = {};
    for (const char of lowerCaseWord) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let result = '';
    for (const char of lowerCaseWord) {
        result += charCount[char] === 1 ? '(' : ')';
    }
    return result;
}