function mergeArrays(a, b) {
    
  const finarray = [];

  const blen = b.length;
  const alen = a.length;
  
  const maxlen = Math.max(alen, blen);
  
  for (let i = 0; i < maxlen; i++) {
      if (i < alen) {
          finarray.push(a[i]);
  }
      if (i < blen) {
          finarray.push(b[i]);
         
      }
 
}
 return finarray;
}
