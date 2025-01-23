import { mainFunction,taskA,taskB } from "../src/function";

describe('For Main Function', () => {

    it('For basic case: ', () => {
        expect(mainFunction(2, 3, 125)).toBeCloseTo(0.11, 5);
    })

    it('If sqrt(x < 0): ', () => {
        expect(mainFunction(1, 2, -4)).toBeNaN();
    })

    it('If log (x = 0): ', () => { 
        expect(mainFunction(1, 2, 0)).toBeNaN();
    })

    it('If log ((x = 1) - 1): ', () => { 
        expect(mainFunction(1, 2, 1)).toEqual(0);
    })

});

describe('For task A', () => {
    
    it('For basic case: ', () => {
        const [x, y] = taskA(2, 6, 0.5);
        expect(x).toHaveLength(9);  
        expect(y).toHaveLength(9);  
    });

    it('If step = 0: ', () => {
        const [x, y] = taskA(2, 10, 0);
        expect(x).toHaveLength(0);  
        expect(y).toHaveLength(0);
    });

    it('If the beginning value is equal to the ending value: ', () => {
        const [x, y] = taskA(2, 2, 5);
        expect(x).toHaveLength(1);  
        expect(y).toHaveLength(1);
    });

});

describe('For task B', () => {

    it('If empty array', () => {
        const [x, y] = taskB([]);
        expect(x).toHaveLength(0);
        expect(y).toHaveLength(0);
    })

    
    it('Should return array len = 5', () => {
        const [x, y] = taskB([1.3, 2.8, 5.7, 10.1, 100.23]);
        expect(x).toHaveLength(5);
        expect(y).toHaveLength(5);
    })
});



