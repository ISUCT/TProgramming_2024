function anagramDifference(w1, w2) {
    const letterCount = {};
  
    for (let letter of w1) {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  
    for (let letter of w2) {
      letterCount[letter] = (letterCount[letter] || 0) - 1;
    }
    let lettersToRemove = 0;
    for (let count of Object.values(letterCount)) {
      lettersToRemove += Math.abs(count);
    }
  
    return lettersToRemove;
  }
  