function anagramDifference(w1,w2){
  w1 = w1.split('')
  w2 = w2.split('')
  for (let i = 0; i < w1.length;i++){
    let char = w2.indexOf(w1[i])
    if (char != -1){
      w1.splice(i,1,'')
      w2.splice(char,1,'')
    }
  }
  w1 = w1.join('')
  w2 = w2.join('')
  return (w1.length + w2.length)
}
