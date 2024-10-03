function anagramDifference(w1, w2) {
  let c = 0;
  let ch = {};
  for (let i = 0; i < w1.length; i++) {
    ch[w1[i]] = (ch[w1[i]] || 0) + 1;
  }
  for (let i = 0; i < w2.length; i++) {
    ch[w2[i]] = (ch[w2[i]] || 0) - 1;
  }
  for (let letter in ch) {
    c += Math.abs(ch[letter]);
  }

  return c
}