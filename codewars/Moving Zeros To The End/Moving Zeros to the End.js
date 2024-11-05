function moveZeros(arr) {
    let result = []
    let count = 0
    for (i=0;i<arr.length;i++){
        if (arr[i]!==0){
            result.push(arr[i])
        } else {
            count++
        }
    } 
    for (j=0;j<count;j++){
        result.push(0)
    }
    return result
  }