function productFib(prod) {
    let f0 = 0;
    let f1 = 1;
    let found = false;

    while (f0 * f1 <= prod) {
        if (f0 * f1 === prod) {
            found = true;
            break;
        }
        let temp = f1;
        f1 = f0 + f1;
        f0 = temp;
    }

    return [f0, f1, found];
}
