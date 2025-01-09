function anagramDifference(word1, word2) {
    let freq1 = {};
    let freq2 = {};
  
    for (let char of word1) {
      freq1[char] = (freq1[char] || 0) + 1;
    }
  
    for (let char of word2) {
      freq2[char] = (freq2[char] || 0) + 1;
    }
  
    let deletions = 0;
  
    let allChars = new Set([...Object.keys(freq1), ...Object.keys(freq2)]);
  
    for (let char of allChars) {
      let count1 = freq1[char] || 0;
      let count2 = freq2[char] || 0;
  
      deletions += Math.abs(count1 - count2);
    }
  
    return deletions;
  }