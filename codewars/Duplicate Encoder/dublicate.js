function duplicateEncode(word) {
    word = word.toLowerCase();
    const count = {};
    for (const char of word) {
      count[char] = (count[char] ?? 0) + 1;
    }
  
    let brackets = "";
    for (const char of word) {
      brackets += count[char] === 1 ? "(" : ")";
    }
    return brackets;
  } 