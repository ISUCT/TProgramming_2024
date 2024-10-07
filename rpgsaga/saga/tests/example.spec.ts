import { calculateFunc,taskA,taskB } from "../src";

describe('TaskB func tests', () => {
    it('Array with len = 5', () => {
        expect(taskB([1,2,3,4,5])).toEqual(5);
    })
    it('Empty array', () => {
        expect(taskB([])).toEqual(0);
    })
});

describe('TaskA func', ()=>{
    it('The basic case',()=>{
        expect(taskA(1,6,1)).toEqual(5)
    })
    it('The basic case, but the step is negative',()=>{
        expect(taskA(1,6,-1)).toEqual(0)
    })
    it('The beginning is less than the end, the step is negative',()=>{
        expect(taskA(5,1,-1)).toEqual(0)
    })
    it('The beginning is less than the end, the step is positive',()=>{
        expect(taskA(5,1,1)).toEqual(0)
    })
    it('The beginnig is equal to the end',()=>{
        expect(taskA(1,1,1)).toEqual(0)
    })   
})

describe('Calculation func tests', () => {
    it('Basic case', () => {
        expect(calculateFunc(3,18,3)).toEqual(13.18);
    })
    it('lg from zero', ()=>{
        expect(calculateFunc(1,7,0)).toEqual(0)
    })
    it('Negative A and B', () => {
        expect(calculateFunc(-3,-18,3)).toEqual(NaN);
    })
    it('Negative X', () => {
        expect(calculateFunc(3,18,-3)).toEqual(NaN);
    })
});
