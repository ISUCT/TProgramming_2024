function productFib(prod) {
    let a = 0;
    let b = 1;
    while (a * b < prod) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    return [a, b, a * b === prod];
}