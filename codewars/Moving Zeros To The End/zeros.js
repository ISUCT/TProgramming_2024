function moveZeros(arr) {
  let ansArr = []
  let zeroCount = 0
  for (let i = 0; i< arr.length; i++) {
    if (arr[i] !== 0) {
        ansArr.push(arr[i])
    } else {
        zeroCount ++
    }
  }
  while (zeroCount) {
      ansArr.push(0)
      zeroCount--
  }
  return ansArr
}