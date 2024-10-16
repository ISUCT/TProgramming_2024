export function duplicateEncode(word: string): string{
  const wordNoCap: string = word.toLowerCase();
  let countArr: number[] = Array(128).fill(0);
  
  for (let i = 0; i < wordNoCap.length; i++) {
    countArr[wordNoCap.charCodeAt(i)]++;
  }
  
  let res: string = "";
  
  for (let i = 0; i < wordNoCap.length; i++) {
    if(countArr[wordNoCap.charCodeAt(i)] > 1) {
      res += ")";
      continue;
    }
    res += "(";
  }

  return res;
}