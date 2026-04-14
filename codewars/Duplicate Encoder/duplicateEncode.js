function duplicateEncode(word) {
    word = word.toLowerCase();
    let result = '';
    for (let i = 0; i < word.length; i++) {
      if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
        result += '(';
      } else {
        result += ')';
      }
    }
    return result;
  }