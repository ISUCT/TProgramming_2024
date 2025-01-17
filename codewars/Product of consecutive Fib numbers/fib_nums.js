function productFib(prod) {
    let w = 0;
    let l = 1;
    while (w * l < prod) {
        const temp = l;
        l = w + l;
        w = temp;
    }
    return [w, l, w * l === prod];
}