function countChars(word) {
    const count = {};
    for (const char of word) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}

function anagramDifference(word1, word2) {
    const count1 = countChars(word1);
    const count2 = countChars(word2);
    let totalRemovals = 0;
    const allChars = new Set([...Object.keys(count1), ...Object.keys(count2)]);
    
    for (const char of allChars) {
        const freq1 = count1[char] || 0;
        const freq2 = count2[char] || 0;
        totalRemovals += Math.abs(freq1 - freq2);
    }
    
    return totalRemovals;
}