function anagramDifference(w1, w2) {
    if (w1 === "" && w2 === "") {
      return 0;
    } else if (w1 === "" || w2 === "") {
      if (w1 !== "") {
        return w1.length;
      } else {
        return w2.length;
      }
    }
    let letterCount = {};
    if (w1 !== "" && w2 !== "") {
      for (let letter of w1) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
      }
  
      for (let letter of w2) {
        if (letterCount[letter]) {
          letterCount[letter]--;
        } else {
          letterCount[letter] = -1;
        }
      }
    }
    let lettersToRemove = 0;
  
    for (let count of Object.values(letterCount)) {
      lettersToRemove += Math.abs(count);
    }
  
    return lettersToRemove;
  }