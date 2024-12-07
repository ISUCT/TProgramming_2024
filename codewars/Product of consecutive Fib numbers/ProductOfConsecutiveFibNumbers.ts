export const productFib = (prod: number): [number, number, boolean] => {
    let a: number = 0;
    let b: number = 1;
    while (a*b < prod) {
        let c: number = a + b;
        a = b;
        b = c;
    }
    return [a, b, a*b === prod];
}