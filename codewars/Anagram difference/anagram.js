function anagramDifference(w1,w2){
    const frequencyMap1 = {};
    const frequencyMap2 = {};
    
    for (const letter of w1) {
      if (letter in frequencyMap1) {
        frequencyMap1[letter]++;
      } else {
        frequencyMap1[letter] = 1;
      }
    }
  
    for (const letter of w2) {
      if (letter in frequencyMap2) {
        frequencyMap2[letter]++;
      } else {
        frequencyMap2[letter] = 1;
      }
    }
  
    let totalLettersToRemove = 0;
    for (const letter in frequencyMap1) {
      if (letter in frequencyMap2) {
        totalLettersToRemove += Math.abs(frequencyMap1[letter] - frequencyMap2[letter]);
      } else {
        totalLettersToRemove += frequencyMap1[letter];
      }
    }
  
    for (const letter in frequencyMap2) {
      if (!(letter in frequencyMap1)) {
        totalLettersToRemove += frequencyMap2[letter];
      }
    }
  
    return totalLettersToRemove;
  }