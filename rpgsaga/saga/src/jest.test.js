const { solvetaskA, solvetaskB } = require('./functions');

describe('Функции tesTaskA и tesTaskB', () => {
    const nums = [1.1, 2.4, 3.6, 1.7, 3.9];

    test('Проверка solvetaskA', () => {
        const result1 = solvetaskA(1.28);
        expect(result1).toBeDefined();

        const result2 = solvetaskA(2.4);
        expect(result2).toBeDefined();

        // Добавьте больше значений для проверки, если это необходимо
    });

    test('Проверка solvetaskB', () => {
        const expectedResults = nums.map(num => solvetaskA(num)).reverse();
        const resB = solvetaskB(nums);

        expect(resB).toEqual(expectedResults);
    });
});
