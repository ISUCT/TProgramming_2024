function mergeArrays(a, b) {
    let res = [];
    
    let len = Math.max(a.length, b.length);
    
    for(let i = 0; i < len; i++) {
      if(i < a.length) {
        res.push(a[i]);
      }
      
      if(i < b.length) {
        res.push(b[i]);
      }
    }
    
    return res;
  }