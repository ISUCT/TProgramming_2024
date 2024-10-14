function mergeArrays(a, b) {
  
  let final = [];
  min_length = Math.min(a.length, b.length);
  
  for (let i = 0; i < min_length; i++) final.push(a[i], b[i]);
  
  if (a.length > b.length) {
    final = final.concat(a.slice(min_length));
  }

  if (b.length > a.length) {
    final = final.concat(b.slice(min_length));
  }
  
  return final;
}