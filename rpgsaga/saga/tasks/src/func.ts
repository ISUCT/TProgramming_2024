function calculateY(a: number, b: number, x: number): number {
    const numerator = (1 / 3) * (a * x + b);
    const denominator = Math.log10(x) ** 2;
    return numerator / denominator;
}

const a = 1.35;
const b = 0.98;
let x = 1.14;
const xEnd = 4.24;
const deltaX = 0.4;

console.log("Задача А:");
while (x <= xEnd) {
    const y = calculateY(a, b, x);
    console.log(`x = ${x}, y = ${y}`);
    x += deltaX;
}

const xValuesB = [1.1, 2.4, 3.6, 1.7, 3.9];

console.log("\nЗадача B:");
xValuesB.forEach(x => {
    const y = calculateY(a, b, x);
    console.log(`x = ${x}, y = ${y}`);
});
export{calculateY}