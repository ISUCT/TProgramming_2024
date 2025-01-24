import { calculateY } from "../src/func";




describe('calculateY', () => {
    it('should calculate the correct y value for given a, b, and x', () => {
        const a = 1.35;
        const b = 0.98;
        const x = 2; 

        const result = calculateY(a, b, x);
        const expected = (1 / 3) * (a * x + b) / (Math.log10(x) ** 2);
        
        expect(result).toBeCloseTo(expected, 5);
    });

    it('should return Infinity for x = 1 (division by zero)', () => {
        const a = 1.35;
        const b = 0.98;
        const x = 1;

        const result = calculateY(a, b, x);
        expect(result).toBe(Infinity); 
    });

    it('should return a positive value for x < 1', () => {
        const a = 1.35;
        const b = 0.98;
        const x = 0.5;

        const result = calculateY(a, b, x);
        expect(result).toBeGreaterThan(0); 
    });

    it('should calculate y for an array of x values', () => {
        const a = 1.35;
        const b = 0.98;
        const xValues = [1.1, 2.4, 3.6, 1.7, 3.9];
        
        const results = xValues.map(x => calculateY(a, b, x));

        results.forEach((result, index) => {
            const expected = (1 / 3) * (a * xValues[index] + b) / (Math.log10(xValues[index]) ** 2);
            expect(result).toBeCloseTo(expected, 5);
        });
    });
});