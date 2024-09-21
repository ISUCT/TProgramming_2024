function anagramDifference(w1,w2){
  let firstCountArr = Array(128).fill(0);
  let secondCountArr = Array(128).fill(0);
  let commonLetters = 0;
  
  for(let i = 0; i < w1.length; i++) {
    firstCountArr[w1.charCodeAt(i)]++;
  }
  
  for(let i = 0; i < w2.length; i++) {
    secondCountArr[w2.charCodeAt(i)]++;
  }
  
  for(let i = 0; i < firstCountArr.length; i++) {
    if(firstCountArr[i] >= 1 && secondCountArr[i] >= 1) {
      commonLetters += Math.min(firstCountArr[i], secondCountArr[i]);
    }
  }
  
  let res = w1.length + w2.length - 2 * commonLetters;
  
  return res;
}