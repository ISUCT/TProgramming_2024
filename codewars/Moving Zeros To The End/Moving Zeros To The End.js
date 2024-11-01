function moveZeros(arr) {
  for(let i = arr.length; i >= 0; i--) {
    if(arr[i] === 0) {
      arr.push(0);
      arr.splice(i, 1);
    }
  }
  return arr;
}