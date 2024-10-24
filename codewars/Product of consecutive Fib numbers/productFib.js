function productFib(prod) {
    let fib1 = 1;
    let fib2 = 1;
  
    while (fib1 * fib2 < prod) {
      let nextFib = fib1 + fib2;
      fib1 = fib2;
      fib2 = nextFib;
    }
  
    return [fib1, fib2, fib1 * fib2 === prod];
  }