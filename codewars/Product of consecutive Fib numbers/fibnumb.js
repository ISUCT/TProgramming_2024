function productFib(prod){
    let first = 1;
    let second = 1;
    while (first * second < prod) {
      second += first;
      first = second - first;
  }
    return [first, second, first * second === prod];
  }