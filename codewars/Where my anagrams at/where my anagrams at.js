function anagrams(word, words) {
    let checking = function(splitedWord, splittedWordFromWords) {
        for (i1 in splitedWord) {
            if (splitedWord[i1] !== splittedWordFromWords[i1]) {
                return false;
            } 
        }
        return true;
    }
    let ansList = [];
    let splitedWord = {};
    word.split('').forEach(element => {
        splitedWord[element] = (splitedWord[element] || 0) + 1;
    });
    let splittedWordFromWords = {};
    for (let i = 0; i < words.length; i++) {
        if (words[i].length === word.length) {
        words[i].split('').forEach(element => {
            splittedWordFromWords[element] = (splittedWordFromWords[element] || 0) + 1;
        });
        if (checking(splitedWord, splittedWordFromWords)) {
            ansList.push(words[i]);
        }
        Object.keys(splittedWordFromWords).forEach(k => delete splittedWordFromWords[k])
    }
}
return ansList
}