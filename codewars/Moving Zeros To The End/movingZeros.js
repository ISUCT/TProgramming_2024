function moveZeros(arr) {
  zero_count = 0
  for (let i = 0; i < arr.length;i++){
    ind = arr.indexOf(0)
    if (arr[ind] == 0){
      arr.splice(ind,1)
      zero_count +=1
    }}
  for (let i = 0; i < zero_count;i++){
    arr.push(0)
  }
  console.log(arr,zero_count)
  return arr
}
