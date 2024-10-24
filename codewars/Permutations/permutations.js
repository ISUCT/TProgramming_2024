function permutations(string) {
    if (string.length <= 1) return [string];
    
    let result = [];
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (string.indexOf(char) === i) {
        let remainingStr = string.slice(0, i) + string.slice(i + 1);
        result = result.concat(permutations(remainingStr).map(perm => char + perm));
      }
    }
  
    return result;
  }