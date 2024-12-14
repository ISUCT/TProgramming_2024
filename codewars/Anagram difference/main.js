function anagramDifference(w1, w2) {
    let k = 0;
    let freq = {};
    for (let i = 0; i < w1.length; i++) {
      freq[w1[i]] = (freq[w1[i]] || 0) + 1;
    }
    for (let i = 0; i < w2.length; i++) {
      freq[w2[i]] = (freq[w2[i]] || 0) - 1;
    }
    for (let letter in freq) {
      k += Math.abs(freq[letter]);
    }

    return k
  }