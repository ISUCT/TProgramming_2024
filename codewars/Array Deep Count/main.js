function deepCount(a) {
  
  let alen = a.length;
  
  for (const i of a) {
    if (Array.isArray(i)) {
      alen += deepCount(i);
    }
  };
  return alen;
}
