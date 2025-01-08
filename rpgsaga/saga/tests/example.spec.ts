import { Animal } from "../src/Animal";
import { Cat } from "../src/Cat";
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

describe('Тесты для класса Dog Лаба №2', () => {
    let rabbit: Dog = new Dog('Polkan', 5, 'male');

    it('should return error for incorrect name', () => {
        expect(() => {
            rabbit.name = '';
        }).toThrow('Incorrect name');
    });
    it('should return error for incorrect age', () => {
        expect(() => {
            rabbit.age = -12;
        }).toThrow('Incorrect age');
    });
    it('should return error for incorrect sex', () => {
        expect(() => {
            rabbit.sex = 'baby';
        }).toThrow('Incorrect sex');
    });
    it('should return the correct routine', () => {
        expect(rabbit.routine()).toBe('The dog Polkan loves to play and have fun with his master!');
    });   
    it('should return the correct voice', () => {
        expect(rabbit.voice()).toBe('Polkan the dog says WOOF!');
    });
    it('should return correct toString', () => {
        expect(rabbit.toString()).toBe('Name: Polkan, Age: 5, Sex: male');
    })
    it('should return correct response for "sit" command', () => {
        expect(rabbit.commands('sit')).toBe('Polkan sits down');
    });

    it('should return correct response for "stay" command', () => {
        expect(rabbit.commands('stay')).toBe('Polkan stays in place');
    });

    it('should return correct response for "fetch stick" command', () => {
        expect(rabbit.commands('fetch stick')).toBe('Polkan fetches the stick');
    });

    it('should return error message for unknown command', () => {
        expect(rabbit.commands('jump')).toBe('The dog Polkan does not know such a command');
    });
});

describe('Тесты для класса Cat Лаба №3', () => {
    let cat: Cat = new Cat('Myrka', 6, 'female');

    it('should return error for incorrect name', () => {
        expect(() => {
            cat.name = '';
        }).toThrow('Incorrect name');
    });
    it('should return error for incorrect age', () => {
        expect(() => {
            cat.age = -12;
        }).toThrow('Incorrect age');
    });
    it('should return error for incorrect sex', () => {
        expect(() => {
            cat.sex = 'baby';
        }).toThrow('Incorrect sex');
    });
    it('should return the correct routine', () => {
        expect(cat.routine()).toBe("The cat Myrka likes to sleep and she doesn't care about her master");
    });   
    it('should return the correct voice', () => {
        expect(cat.voice()).toBe('Myrka the cat says MEOW!');
    });
    it('should return correct toString', () => {
        expect(cat.toString()).toBe('Name: Myrka, Age: 6, Sex: female');
    })
    it('should return error message for unknown command', () => {
        expect(cat.commands('jump')).toBe('The cat Myrka does not know any command');
    });
});

describe('list of classes (laba №3)', () => {
    it('should return the correct methods for each element in list', () => {
        const dog = new Dog('Rex', 6, 'male');
        const cat = new Cat('Barsik', 8, 'male');
        const animals: Animal[] = [dog, cat];
        let answers: String[] = [];

        for (const el of animals) {
            answers.push(el.toString());
        }
        expect(answers[0]).toBe('Name: Rex, Age: 6, Sex: male');
        expect(answers[1]).toBe('Name: Barsik, Age: 8, Sex: male');
    })
});