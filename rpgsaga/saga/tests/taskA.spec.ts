import { taskA } from "../src";

describe('test taskA', () => {
    it('should return [-3.5670236341584967, -9.99752404516412, Infinity, 13.362178114876532, 7.423581471946264, 5.451774615260348]', () => {
        const result = [-3.5670236341584967, -9.99752404516412, Infinity, 13.362178114876532, 7.423581471946264, 5.451774615260348];
        expect(taskA(1.2, 3.2, 0.4)).toEqual(result);
    })
    it('should return [-9.99752404516412, 25.210176182004208, 7.423581471946258, 4.894697076545542, 3.9160951337118837]', () => {
        const result = [-9.99752404516412, 25.210176182004208, 7.423581471946258, 4.894697076545542, 3.9160951337118837];
        expect(taskA(1.6, 4.0, 0.6)).toEqual(result);
    })
    it('should return [-3.5670236341584967, -5.874074021040143, -9.997524045164111, -21.92817091653796, -21285328910550348]', () => {
        const result = [-3.5670236341584967, -5.874074021040143, -9.997524045164111, -21.92817091653796, -21285328910550348];
        expect(taskA(1.2, 2.0, 0.2)).toEqual(result);
    })
    it('should return error', () => {
        const expectedErrorMessage = 'You have passed incorrect arguments.';
        expect(() => {
            taskA(2.0, 1.0, 0.2);
        }).toThrow(new Error(expectedErrorMessage));
    })
});