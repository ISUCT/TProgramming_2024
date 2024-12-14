function pigIt(str){
    let res=[]
    arr=(str.split(' '))

    for(i=0;i<arr.length;i++){
      if (arr[i] === '!' || arr[i] === '?') {
        ar1=arr[i].split("")
        res.push(ar1.join(""))
      } else {
        ar1=arr[i].split("")
        ar1.push(ar1.shift(),'ay')
        res.push(ar1.join(""))
      }
    }
    return res.join(' ')
  }