import { log } from "../src";

describe('test log', () => {
    it('should return 3 as result of (8,2)', () => {
        const a: number = 8;
        const b: number = 2;
        expect(log(a, b)).toEqual(3);
    })
    it('should return 0 as result of (Infinity,1)', () => {
        const a: number = 1;
        const b: number = Infinity;
        expect(log(a, b)).toEqual(0);
    })
    it('should return 3 as result of (0.008,0.2)', () => {
        const a: number = 0.008;
        const b: number = 0.2;
        expect(log(a, b)).toBeCloseTo(3, 5);
    })
});