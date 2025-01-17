import { formula } from "../../src/Lab1/formuls";

describe('Test of func formul', () => {
    it('Func "formul" return undefind if x = 0', () => {
        let y: number = formula(0);
        expect(y).toBeNaN()
    });
    it('Func "formul" return undefind if x = 1', () => {
        let y: number = formula(1);
        expect(y).toBeDefined()
    });
    it('Func "formul" return undefind if x = -1', () => {
        let y: number = formula(-1);
        expect(y).toBeDefined()
    });
    it('Func "formul" return undefind if x = 0.5', () => {
        let y: number = formula(0.5);
        expect(y).toBeNaN()
    });
    it('Func "formul" return undefind if x = -0.5', () => {
        let y: number = formula(-0.5);
        expect(y).toBeNaN()
    });
    it('Func "formul" return  if x = 1.2', () => {
        let y = formula(1.2);
        expect(y).toBeCloseTo(2.346)
    });
    it('Func "formul" return undefind if x = 2.47', () => {
        let y = formula(2.47);
        expect(y).toBeCloseTo(12.008)
    });
    it('Func "formul" return undefind if x = 4.56', () => {
        let y = formula(4.56);
        expect(y).toBeCloseTo(10972.99)
    });
})