function permutations(string) {

    if (string.length <= 1) {
      return [string];
    }
    let results = [];
    for (let i = 0; i < string.length; i++) {
    let firstChar = string[i];
      if (string.indexOf(firstChar) != i) {
        continue;
        }
    let otherChars = string.slice(0, i) + string.slice(i + 1);
      for (let permutation of permutations(otherChars)) {
        results.push(firstChar + permutation);
      }
    }
    return [...new Set(results)];
  }