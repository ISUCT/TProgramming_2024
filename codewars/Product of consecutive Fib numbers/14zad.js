function Fubnumbers(prod) {
    let a = 0;
    let b = 1;

    while (a * b < prod) {
        let next = a + b;
        a = b;
        b = next;
    }

    if (a * b === prod) {
        return [a, b, true];
    } else {
        return [a, b, false];
    }
}

console.log(Fubnumbers(714));
console.log(Fubnumbers(800));