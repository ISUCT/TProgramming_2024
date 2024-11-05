function mergeArrays(a, b) {
    let result=[]
    min = a.length > b.length ? b.length : a.length;
    for (let i=0;i<min;i++){
        result.push(a[i])
        result.push(b[i])
    }
    if (a.length>b.length){
        for (let j = min;j<a.length;j++){
            result.push(a[j])
        }
    } else {
        for (let j = min;j<b.length;j++){
            result.push(b[j])
        }
    }
    return result
  }