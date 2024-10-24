import { Dog } from "../src/Dog";
import { solution, taskA, taskB } from "../src/Laba1";

describe('Тесты для функций 1 лабораторной работы', () => {
    it('should return 1.6 for solution(2, 3, 0.2)', () => {
        const res = solution(2, 3, 0.2)
        expect(res).toBeCloseTo(1.6, 1);
    })
    it('should return 1.6 for solution(0, 0, 0)', () => {
        const res = solution(0, 0, 0);
        expect(res).toBeCloseTo(1.6, 1);
    });
    it('should return NaN for solution(0, -1, 0)', () => {
        const res = solution(0, -1, 0);
        expect(res).toBeNaN();
    });
    it('should return correct array for task_A(2, 3, 0, 1, 0.1)', () => {
        const expected = [];
        for (let i = 0; i < 1; i += 0.1) {
            expected.push(solution(2, 3, i));
        }
        const res = taskA(2, 3, 0, 1, 0.1);
        expect(res).toEqual(expected);
    });
    it('should return an empty array for task_A(2, 3, 1, 1, 0.1)', () => {
        const res = taskA(2, 3, 1, 1, 0.1);
        expect(res).toEqual([]);
    });
    it('should return an empty array for task_A(0, 0, 0, 0, 0)', () => {
        const res = taskA(0, 0, 0, 0, 0);
        expect(res).toEqual([]);
    });
    it('should return an empty array for task_A(2, 3, 0.21, 0.16, 0.05)', () => {
        const res = taskA(2, 3, 0.21, 0.16, 0.05);
        expect(res).toEqual([]);
    });
    it('should return correct array for task_B(2, 3, [0, 0.2, 0.5])', () => {
        const input = [0, 0.2, 0.5];
        const expected = input.map(x => solution(2, 3, x));
        const res = taskB(2, 3, input);
        expect(res).toEqual(expected);
    });
    it('should return an empty array for task_B(2, 3, [])', () => {
        const res = taskB(2, 3, []);
        expect(res).toEqual([]);
    });
    it('should handle negative values in the input array for task_B(2, 3, [-0.5, -0.2])', () => {
        const input = [-0.5, -0.2];
        const expected = input.map(x => solution(2, 3, x));
        const res = taskB(2, 3, input);
        expect(res).toEqual(expected);
    });
})

describe('Dog Class', () => {
    const dog: Dog = new Dog('Buddy', 5, 'labrador retriever');
    it('should create a dog with correct properties', () => {
        expect(dog.name).toBe('Buddy');
        expect(dog.age).toBe(5);
        expect(dog.breed).toBe('labrador retriever');
    });
    it('should change the dog\'s name', () => {
        dog.name = 'Max';
        expect(dog.name).toBe('Max');
    });
    it('should throw an error for empty name', () => {
        expect(() => { dog.name = ''; }).toThrow('Incorrect name');
    });
    it('should change the dog\'s age', () => {
        dog.age = 7;
        expect(dog.age).toBe(7);
    });
    it('should throw an error for incorrect age', () => {
        expect(() => { dog.age = 0; }).toThrow('Incorrect age');
        expect(() => { dog.age = 16; }).toThrow('Incorrect age');
    });
    it('should throw an error for incorrect breed', () => {
        expect(() => { dog.breed = 'invalid breed'; }).toThrow('Incorrect breed');
    });
    it('should return correct response for known commands', () => {
        expect(dog.dogCommands('bork')).toBe('Max says: Woof!');
        expect(dog.dogCommands('sit')).toBe('Max sits down');
        expect(dog.dogCommands('stay')).toBe('Max stays in place');
        expect(dog.dogCommands('fetch stick')).toBe('Max fetches the stick');
    });
    it('should return unknown command response for unknown commands', () => {
        expect(dog.dogCommands('jump')).toBe('The dog Max does not know such a command');
    });
    it('should return correct routine message', () => {
        expect(dog.dogRoutine()).toBe('The dog Max loves to play and have fun with his master!');
    });
});