function sumPairs(ints, s) {
  
  dict = {}
  
  for (let value of ints) {
    let firstPart = dict[value]
    
    if (firstPart !== undefined) {
      return [firstPart, value]
    }
    
    dict[s - value] = value;
  }
  
  console.log(dict)
  return undefined
}