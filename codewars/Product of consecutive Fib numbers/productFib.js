function productFib(prod){
  let prev = 0
  let curr = 1
  let multi = prev*curr
  while (multi < prod){
    let temp = curr
    curr+=prev
    prev = temp
    multi = prev*curr
  }
  return [prev,curr,multi == prod ? true:false]
}