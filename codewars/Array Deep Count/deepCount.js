function deepCount(a) {
  
  let count = 0;
  
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      count += 1 + deepCount(a[i]);
    } else {
      count += 1;
    }
  }
  
  return count;
}