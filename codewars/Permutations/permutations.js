function permutations(string) {
    if (string.length === 1) {
      return [string];
    }
  
    const result = [];
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      const remainingChars = string.slice(0, i) + string.slice(i + 1);
      const subPermutations = permutations(remainingChars);
  
      for (const subPermutation of subPermutations) {
        result.push(char + subPermutation);
      }
    }
  
    return [...new Set(result)];
  }