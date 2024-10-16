function add(a, b) {
  const numLen = Math.max(a.length, b.length);
  a = a.padStart(numLen, "0");
  b = b.padStart(numLen, "0");
  
  let res = [];
  
  let remainder = false;
  for(let i = a.length - 1; i >= 0; i--) {
    let sum = Number(a[i]) + Number(b[i]);
    
    if(remainder) {
      sum++;
      remainder = false;
    }
    
    sum = sum.toString();
   
    if(sum.length > 1) {
      remainder = true;
      sum = sum.slice(1);
    }
    
    res.push(sum);
  }
  
  if(remainder) {
    res.push("1");
  }
  
  res.reverse();
  res = res.join("");
  return res;
}