function duplicateEncode(word){
    word = word.toLowerCase();
    
    const charCount = {};
    
    for (const char of word) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  let result = "";
    for (const char of word) {
      result += charCount[char] === 1 ? "(" : ")";
    }
      return result;
  }