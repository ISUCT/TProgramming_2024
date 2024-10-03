function mergeArrays(a, b) {
    let box = [];
    for (let i = 0; i < a.length; i++){
        if(i >= a.length){
            box.push(b[i]);
        }
        else if(i >= b.length){
            box.push(a[i]);
        }
        else{
            box.push(a[i]);
            box.push(b[i]);
        }
  }
  return(box);
}
  
  let result = mergeArrays(["a", "b", "c", "d", "e", "f"], [1, 2, 3]);
  console.log(result);