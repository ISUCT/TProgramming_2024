import { func } from "../src";

describe('test func', () => {
    it('should return 7 as result of 2.8', () => {
        const x: number = 2.8;
        expect(func(x)).toBeCloseTo(7, 0);
    })
    it('should return 0 as result of 1', () => {
        const x: number = 1;
        expect(func(x)).toBeCloseTo(0, 0);
    });
    it('should return 3.9 as result of 4', () => {
        const x: number = 4;
        expect(func(x)).toBeCloseTo(3.9, 1);
    });
    it('should return -12.2 as result of 0.5', () => {
        const x: number = 0.5;
        expect(func(x)).toBeCloseTo(-12.2, 1);
    });
});