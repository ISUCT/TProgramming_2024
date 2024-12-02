function productFib(prod) {
    let first = 1;
    let second = 1;
    while (first * second < prod) {
      let x = second;
      second += first;
      first = x;
    }
    return [first, second, first * second === prod];
  } 