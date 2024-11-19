function productFib(prod){
    let fib = [0,1,1]
    while ((fib[fib.length-1]*fib[fib.length-2])<prod){
      fib.push((fib[fib.length-2]+fib[fib.length-1]))
    }
    if ((fib[fib.length-1]*fib[fib.length-2])===prod){
      return [fib[fib.length-2],fib[fib.length-1],true]
    } else {
      return [fib[fib.length-2],fib[fib.length-1],false]
    }
  }