import { func } from "../src";

describe('test func', () => {
    it('should return 7 as result of 2.8', () => {
        const a: number = 2.8;
        expect(func(a)).toBeCloseTo(7, 0);
    })
    it('should return 0 as result of 1', () => {
        const a: number = 1;
        expect(func(a)).toBeCloseTo(0, 0);
    });
    it('should return 3.9 as result of 4', () => {
        const a: number = 4;
        expect(func(a)).toBeCloseTo(3.9, 1);
    });
    it('should return -12.2 as result of 0.5', () => {
        const a: number = 0.5;
        expect(func(a)).toBeCloseTo(-12.2, 1);
    });
});