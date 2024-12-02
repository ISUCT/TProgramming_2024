function permutations(string) {
    if (string.length <= 1) {
      return [string];
    }
    let shufflings = [];
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (string.indexOf(char) != i) {
        continue;
      }
      let remainingStr = string.slice(0, i) + string.slice(i + 1);
      for (let permutation of permutations(remainingStr)) {
        shufflings.push(char + permutation);
      }
    }
  
    return [...new Set(shufflings)];
  }