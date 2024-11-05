function anagramDifference(w1, w2) {
    const letters1 = {};
    const letters2 = {};
  
    for (let i = 0; i < w1.length; i++) {
      const letter = w1[i];
      letters1[letter] = (letters1[letter] || 0) + 1;
    }
  
    for (let i = 0; i < w2.length; i++) {
      const letter = w2[i];
      letters2[letter] = (letters2[letter] || 0) + 1;
    }
  
    let difference = 0;
    for (const letter in letters1) {
      difference += Math.abs((letters1[letter] || 0) - (letters2[letter] || 0));
    }
    for (const letter in letters2) {
      if (!(letter in letters1)) {
        difference += letters2[letter];
      }
    }
  
    return difference;
  }
  
  