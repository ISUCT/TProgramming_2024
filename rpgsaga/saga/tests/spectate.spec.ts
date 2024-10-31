import { funA, funB } from '../src/index';

describe('Tests taskA', () => {
    it('should return 6 values', () => {
        const otvet = [
            -1.4293950687029888,
            -0.0393230217579651,
            0.3099432579827624,
            0.45266154436417616,
            0.5256192162655812,
            0.5681842518372162,
        ];
        expect (funA(1.1, 0.09, 1.2, 2.2, 0.2)).toEqual(otvet);
    });
    it('Should return 5 values', () => {
        const otvet = [
            -0.07500602729310199,
            Infinity,
            1.5376692020576952,
            1.1602093132990197,
            1.0352690286794668,
        ];
        expect (funA(0.5,1,1.5,3.5,0.5)).toEqual(otvet);
    });
    it('Should return 0 values since the step is negative', () => {
        expect (funA(0.5,1,1.5,3.5,-1)).toEqual([]);
    });
    it('The beginning is bigger than ending, the step is negative. Should return 6 numbers', () => {
        const otvet = [
            0.5681842518372162,
            0.5256192162655812,
            0.4526615443641762,
            0.3099432579827627,
            -0.039323021757964406,
            -1.4293950687029862,
        ];
        expect (funA(1.1,0.09,2.2,1.2,-0.2)).toEqual(otvet);
    });
    it('The beginning is bigger than ending, the step is positive. Should return 0 numbers', () => {
        expect (funA(0.5,1,1.5,3.5,-1)).toEqual([]);
    });
    it('The beginning is positive, the ending is negative, the step is negative. Should return 4 numbers', () => {
        const otvet = [
            -0.07500602729310199,
            -0.07500602729310199,
            1.5376692020576952,
            1.0352690286794668,
        ];
        expect (funA(0.5,1,1.5,-3.5,-1)).toEqual(otvet);
    });
    it('The beginning and the ending is equal. Should return 0 numbers', () => {
        expect (funA(0.5,1,2,2,2)).toEqual([Infinity]);
    });
    it('The step is 0. Should return 0 numbers', () => {
        expect (funA(0.5,1,2,10,0)).toEqual([]);
    });
});