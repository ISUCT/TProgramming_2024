function deepCount(a){
  let len = 0;
  for(let i = 0; i < a.length; i++) {
    if(Array.isArray(a[i])) {
      len += deepCount(a[i]);
    }
    len++;
  }
  return len;
}