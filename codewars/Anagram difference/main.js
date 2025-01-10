function anagramDifference(w1,w2){
  
    let count={};
  
    for (let i=0; i < w1.length; i++){
        count[w1[i]] = (count[w1[i]] || 0) + 1;
    }
    for (let i=0; i < w2.length; i++){
        count[w2[i]] = (count[w2[i]] || 0) - 1;
    }
    let res=0;
    for (let x in count){
        res += Math.abs(count[x])
    }
    return res
 }
 
