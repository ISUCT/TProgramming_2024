export function productFib(prod: number): [number, number, boolean] {
    let fib1: number = 1;
    let fib2: number = 1;
    while (fib1 * fib2 < prod) {
        const nextFib: number = fib1 + fib2;
        fib1 = fib2;
        fib2 = nextFib;
    }
    return [fib1, fib2, fib1 * fib2 === prod];
}