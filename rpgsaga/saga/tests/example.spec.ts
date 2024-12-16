import { Animal } from "../src/Animal";
import { death, taskA, taskB} from "../src/laba1";
import { Piggy } from "../src/Piggy";
import { Sheep } from "../src/Sheep";

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


describe('Piggy Class Tests (laba №2)', () => {
    let piggy: Piggy = new Piggy('Porky', 5, 'male', 'brown');


    it('should return error for incorrect name', () => {
        expect(() => {
            piggy.name = '';
        }).toThrow('This name is not correct');
    });
    it('should return error for incorrect age', () => {
        expect(() => {
            piggy.age = -12;
        }).toThrow('This age is not correct');
    });
    it('should return error for incorrect sex', () => {
        expect(() => {
            piggy.sex = 'baby';
        }).toThrow('Sex is not correct');
    });
    it('should return error for incorrect color', () => {
        expect(() => {
            piggy.color = 'red';
        }).toThrow('Color is not correct');
    });
    it('should return the correct moves', () => {
        expect(piggy.moves()).toBe('Porky the brown pig runs and grunts across the field');
    });
    it('should return "lucky pig" for Nyusha the pink pig', () => {
        const luckyPiggy = new Piggy('Nyusha', 2, 'female', 'pink');
        expect(luckyPiggy.luckyAnimal()).toBe('Nyusha the pink pig is lucky pig');
    });
    it('should return "unlucky pig" for other pigs', () => {
        expect(piggy.luckyAnimal()).toBe('Porky the brown pig is unlucky pig');
    });    
    it('should return the correct voice', () => {
        expect(piggy.voice()).toBe('Porky the brown pig says oink!');
    });
    it('should return correct toString', () => {
        expect(piggy.toString()).toBe('Name: Porky, Age: 5, Sex: male, Color: brown');
    })
});

describe('Sheep Class Tests (laba №3)', () => {
    let sheep: Sheep = new Sheep('Barash', 9, 'male', 'white');


    it('should return error for incorrect name', () => {
        expect(() => {
            sheep.name = '';
        }).toThrow('This name is not correct');
    });
    it('should return error for incorrect age', () => {
        expect(() => {
            sheep.age = -12;
        }).toThrow('This age is not correct');
    });
    it('should return error for incorrect sex', () => {
        expect(() => {
            sheep.sex = 'baby';
        }).toThrow('Sex is not correct');
    });
    it('should return error for incorrect color', () => {
        expect(() => {
            sheep.color = 'red';
        }).toThrow('Color is not correct');
    });
    it('should return the correct moves', () => {
        expect(sheep.moves()).toBe('Barash the white sheep runs and grunts across the field');
    });
    it('should return "lucky sheep" for Barash the white sheep', () => {
        expect(sheep.luckyAnimal()).toBe('Barash the white sheep is lucky sheep');
    });
    it('should return "unlucky sheep" for other sheeps', () => {
        const unluckySheep = new Sheep('Izolda', 7, 'male', 'black')
        expect(unluckySheep.luckyAnimal()).toBe('Izolda the black sheep is unlucky sheep');
    });    
    it('should return the correct voice', () => {
        expect(sheep.voice()).toBe('Barash the white sheep says be-e-e');
    });
    it('should return correct toString', () => {
        expect(sheep.toString()).toBe('Name: Barash, Age: 9, Sex: male, Color: white');
    })
});

describe('list of classes (laba №3)', () => {
    it('should return the correct methods for each element in list', () => {
        const piggy = new Piggy('Borya', 3, 'male', 'black');
        const sheep = new Sheep('Barash', 34, 'female', 'white');
        const animals: Animal[] = [piggy, sheep];
        let answers: String[] = [];
    
        for (const el of animals) {
            answers.push(el.toString());
        }
        expect(answers[0]).toBe('Name: Borya, Age: 3, Sex: male, Color: black');
        expect(answers[1]).toBe('Name: Barash, Age: 34, Sex: female, Color: white');
    });
});
