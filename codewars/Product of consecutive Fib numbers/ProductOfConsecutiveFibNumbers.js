function productFib(prod) {
    let first = 0;
    let second = 1;
    while (first * second < prod) {
        second += first;
        first = second - first;
    }
  
    return [first, second, first * second === prod];
}
