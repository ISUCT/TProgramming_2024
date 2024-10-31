function anagramDifference(w1, w2) {
    const letterCounts1 = {};
    const letterCounts2 = {};

    for (const letter of w1) {
        letterCounts1[letter] = (letterCounts1[letter] || 0) + 1;
    }

    for (const letter of w2) {
        letterCounts2[letter] = (letterCounts2[letter] || 0) + 1;
    }

    let difference = 0;
    for (const letter in letterCounts1) {
        difference += Math.abs(letterCounts1[letter] - (letterCounts2[letter] || 0));
    }

    for (const letter in letterCounts2) {
        if (!letterCounts1[letter]) {
            difference += letterCounts2[letter];
        }
    }

    return difference;
}
