import { calculate, solvetaskA, solvetaskB } from '../src';
const b = 2.5;
describe('Функции математические', () => {
    it('calculate: правильное значение для x = 1.28 и b = 2.5', () => {
        const result = calculate(1.28, b);
        const expectedValue = Math.pow(1 + Math.pow(Math.sin(b), 3) + Math.pow(1.28, 3), 2 / (Math.pow(Math.pow(b, 3) + Math.pow(1.28, 3), 1 / 3)));
        expect(result).toBeCloseTo(expectedValue, 5);
    });
    it('Задача А:', () => {
        const result = solvetaskA(1, 2, 0.5, b);
        expect(result.length).toBe(3);
        expect(result[0]).toBeCloseTo(calculate(1, b), 5);
        expect(result[1]).toBeCloseTo(calculate(1.5, b), 5);
        expect(result[2]).toBeCloseTo(calculate(2, b), 5);
    });
    it('Задача B:', () => {
        const nums = [1.1, 2.4, 3.6, 1.7, 3.9];
        const result = solvetaskB(nums, b);
        expect(result.length).toBe(nums.length);
        for (let i = 0; i < nums.length; i++) {
            expect(result[i]).toBeCloseTo(calculate(nums[i], b), 5);
        }
    }); 
});
