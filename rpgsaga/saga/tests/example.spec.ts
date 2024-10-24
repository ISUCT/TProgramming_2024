import { death, taskA, taskB} from "../src/laba1";
import { Piggy } from "../src/Piggy";

describe('Testing functions from laboratory work', () => {
    it('should return -2.3 for death(0.1)', () => {
        const res = death(0.1);
        expect(res).toBeCloseTo(-2.3, 1);
    });

    it('should return -Infinity for death(0)', () => {
        const res = death(0);
        expect(res).toBe(-Infinity);
    });

    it('should return a positive value for death(1)', () => {
        const res = death(1);
        expect(res).toBe(0);
    });

    it('should return a negative value for death(0.5)', () => {
        const res = death(0.5);
        expect(res).toBeLessThan(0);
    });

    it('should return a valid number for death(0.2)', () => {
        const res = death(0.2);
        expect(res).toBeDefined();
        expect(typeof res).toBe('number');
    });

    it('should return an empty array for an invalid range', () => {
        const res = taskA(1, 0, 0.1);
        expect(res).toEqual([]);
    });

    it('should handle a step of 0.5 correctly', () => {
        const res = taskA(0, 1, 0.5);
        expect(res).toEqual([
            death(0),
            death(0.5),
            death(1)
        ]);
    });

    it('should return results for a single value when start and end are the same', () => {
        const res = taskA(0.2, 0.2, 0.1);
        expect(res).toEqual([death(0.2)]);
    });

    it('should return correct results for negative values', () => {
        const res = taskA(-1, -0.5, 0.1);
        expect(res).toEqual([
            death(-1),
            death(-0.9),
            death(-0.8),
            death(-0.7),
            death(-0.6),
            death(-0.5)
        ]);
    });

    it('should return an array of results for a given list of numbers', () => {
        const input = [0.1, 0.2, 0.3];
        const res = taskB(input);
        expect(res).toEqual([
            death(0.1),
            death(0.2),
            death(0.3)
        ]);
    });

    it('should return an empty array for an empty input', () => {
        const input = [];
        const res = taskB(input);
        expect(res).toEqual([]);
    });

    it('should handle negative values correctly', () => {
        const input = [-0.5, -0.1];
        const res = taskB(input);
        expect(res).toEqual([
            death(-0.5),
            death(-0.1)
        ]);
    });

    it('should return results for a single value', () => {
        const input = [0.5];
        const res = taskB(input);
        expect(res).toEqual([death(0.5)]);
    });

    it('should return results for large numbers', () => {
        const input = [100, 200, 300];
        const res = taskB(input);
        expect(res).toEqual([
            death(100),
            death(200),
            death(300)
        ]);
    });
});


describe('Piggy Class Tests', () => {
    let piggy: Piggy = new Piggy('Porky', 5, 'male', 'brown');

    it('should create a Piggy instance with correct properties', () => {
        expect(piggy.name).toBe('Porky');
        expect(piggy.age).toBe(5);
        expect(piggy.sex).toBe('male');
        expect(piggy.color).toBe('brown');
    });
    it('should return the correct name', () => {
        expect(piggy.name).toBe('Porky');
    });

    it('should return the correct age', () => {
        expect(piggy.age).toBe(5);
    });

    it('should return the correct sex', () => {
        expect(piggy.sex).toBe('male');
    });

    it('should return the correct color', () => {
        expect(piggy.color).toBe('brown');
    });

    it('should set a valid name', () => {
        piggy.name = 'Bacon';
        expect(piggy.name).toBe('Bacon');
    });

    it('should throw an error when setting an empty name', () => {
        expect(() => {
            piggy.name = '';
        }).toThrowError('This name is not corret');
    });

    it('should set a valid age', () => {
        piggy.age = 10;
        expect(piggy.age).toBe(10);
    });

    it('should throw an error when setting an invalid age', () => {
        expect(() => {
            piggy.age = 25;
        }).toThrowError('Age is not correct');
    });

    it('should set a valid sex', () => {
        piggy.sex = 'female';
        expect(piggy.sex).toBe('female');
    });

    it('should throw an error when setting an invalid sex', () => {
        expect(() => {
            piggy.sex = 'unknown';
        }).toThrowError('Sex is not correct');
    });

    it('should throw an error when setting an invalid color', () => {
        expect(() => {
            piggy.color = 'green';
        }).toThrowError('Color is not correct');
    });

    it('should return the correct movement string', () => {
        expect(piggy.piggyMoves()).toBe('Bacon the brown pig runs and grunts across the field');
    });

    it('should return lucky pig message for Nyusha', () => {
        const luckyPig = new Piggy('Nyusha', 3, 'female', 'pink');
        expect(luckyPig.luckyPiggy()).toBe('Nyusha the pink pig is lucky pig');
    });

    it('should return unlucky pig message for other names', () => {
        expect(piggy.luckyPiggy()).toBe('Bacon the brown pig is unlucky pig');
    });
});


