function permutations(str) {
    if (str.length <= 1) {
      return [str];
    }
    let result = [];
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let remainingChars = str.slice(0, i) + str.slice(i + 1);
      let subPermutations = permutations(remainingChars);
      for (let j = 0; j < subPermutations.length; j++) {
        result.push(char + subPermutations[j]);
      }
    }
    return [...new Set(result)];
  }