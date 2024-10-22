function productFib(prod) {
    let a = 0;
    let b = 1;
    
    while (a * b < prod) {
      const next = a + b;
      a = b;
      b = next;
    }
    
    return [a, b, a * b === prod];
  }
  
  console.log(productFib(714));
  console.log(productFib(800)); 