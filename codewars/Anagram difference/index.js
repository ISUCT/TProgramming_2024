function anagramDifference(w1,w2){
    let w1S = w1.split('').sort()
    let w2S = w2.split('').sort()
    console.log(w1S)
    console.log(w2S)
    let i = 0;
    let j = 0;
    let diff = 0;
    while(i < w1S.length && j < w2S.length) {
      if(w1S[i] == w2S[j]) {
        i++;
        j++;
      }
      else {
        diff++;
        if(w1S[i] < w2S[j])
          i++;
        else
          j++;
      }
   }
  diff += w1S.length - i + w2S.length - j
  return diff
}