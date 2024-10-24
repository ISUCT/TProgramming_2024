import { taskA, taskB } from '../src/funcAndClass/function';

describe('Tests of taskA', () => {
    it('1) default test', () => {
        const testValues = [
            1.5627118033190683,
            1.444483346894103,
            1.996584876888925,
            2.2878864247889314,
            2.508805958133056,
            2.692928296997281
        ];
        expect(taskA(1.25, 3.25, 0.4)).toEqual(testValues);
    })
    it('2) end < start, delta < 0', () => {
        const testValues = [11.586775993365904,
            8.572690230403264,
            Infinity,
            8.572690230403264,
            11.586775993365904];
        expect(taskA(100, -100, -50)).toEqual(testValues);
    })
    it('3) end > start, delta > 0', () => {
        expect(taskA(50, -50, 5)).toEqual([]);
    })
    it('4) delta = 0', () => {
        expect(taskA(2, 10, 0)).toEqual([]);
    })
    it('5) delta < 0', () => {
        expect(taskA(2, 10, -2)).toEqual([]);
    })
    it('6) the function is not defined (return NaN)', () => {
        expect(taskA(-0.81, 0.81, 0.81)).toEqual([NaN, Infinity, NaN]);
    })
}); 

describe('tests of taskB', () => {
    it('7) default test', () => {
        const testValues = [
            1.7791658793122687,
            2.43670615212377,
            2.913109519389466,
            3.164503036090737,
            3.4668624552335574
        ]
        expect(taskB([1.84, 2.71, 3.81, 4.56, 5.62])).toEqual(testValues);;
    })
    it('8) must return empty array', () => {
        expect(taskB([])).toEqual([]);
    }) 
    it('9) just test', () => {
        const testValues = [
            1.726728684913989,
            2.431366913090221,
            2.9094657118289904,
            3.145765556689283,
            3.4615816198220877]
        expect(taskB([1.8, 2.7, 3.8, 4.5, 5.6])).toEqual(testValues);;
    })
    it('9) just test', () => {
        const testValues = [
            1.1066819197003217,
            1.9510787401896679,
            2.5812271977264367,
            2.980702641337647,
            3.296078572109559]
        expect(taskB([1, 2, 3, 4, 5])).toEqual(testValues);;
    })
    it('11) X-es < 0', () => {
        const testValues = [
            1.1066819197003217,
            1.9510787401896679,
            2.5812271977264367,
            2.980702641337647,
            3.296078572109559]
        expect(taskB([-1, -2, -3, -4, -5])).toEqual(testValues);;
    })
    it('12) the function is not defined (return NaN)', () => {
        expect(taskB([-0.81, -0.4, 0, 0.4, 0.81])).toEqual([NaN, NaN, Infinity, NaN, NaN]);
    }) 
})