import { Rabbit } from "../src/ClassRabbit/Rabbit"

describe('Rabbit methods', () => {
    it('Должно проверить установку возраста для кролика', () => {
        const testRabbit1 = new Rabbit(1, 'asld', 'black');

        testRabbit1.Age = 2;

        expect(testRabbit1.Age).toBe(2);
    });

    it('Должно выкинуть ошибку при установке отрицательного возраста кролика', () => {
        const testRabbit2 = new Rabbit(2, 'ewrt', 'grey');

        expect(() => testRabbit2.Age = -2).toThrow('age cant be below zero');
    });
});