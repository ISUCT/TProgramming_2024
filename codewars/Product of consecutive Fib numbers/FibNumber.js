function productFib(prod) {
    let a = 0;
    let b = 1;

    while (a * b < prod) {
      [a, b] = [b, a + b];
    }

    return [a, b, a * b === prod];
  }