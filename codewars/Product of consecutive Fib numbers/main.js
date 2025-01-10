function productFib(prod) {
    let first = 0;
    let second = 1;
    while (first * second < prod) {
        const temp = second;
        second = first + second;
        first = temp;
    }
    return [first, second, first * second === prod];
}