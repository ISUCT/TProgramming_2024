function duplicateEncode(word) {
    word = word.toLowerCase();
    let result = "";

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (word.split(char).length - 1 === 1) {
            result += "(";
        } else {
            result += ")";
        }
    }

    return result;
}