function mergeArrays(a, b) {
    var returnArray = [];
    var n = 0;
    while (a[n] || b[n] ){
      if(a[n]){
        returnArray.push(a[n]);
      }
      if(b[n]){
        returnArray.push(b[n]);
      }
      n++;    
     }
     return returnArray;
  }