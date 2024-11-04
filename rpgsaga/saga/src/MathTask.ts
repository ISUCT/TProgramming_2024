function calculate(a: number, x: number): number {
    return Math.pow(Math.log10(a + x), 2) / Math.pow(a + x, 2);
}
const a = 2.0;
const xStart = 1.2;
const xEnd = 4.2;
const delX = 0.6;
const = xValues = [1.16, 1.32, 1.47, 1.65, 1.93];
for (let x = xStart; x <= xEnd; x += delX) {
    const y = calculate(a, x);
    console.log(`x = ${x.toFixed(2)}, y = ${y.toFixed(4)}`);
}
xValues.forEach(x => {
    const y = calculate(a, x);
    console.log(`x = ${x.toFixed(2)}, y = ${y.toFixed(4)}`);
});

// Похуй