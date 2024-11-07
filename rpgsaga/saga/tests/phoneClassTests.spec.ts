import { Phone } from "../src/phoneClass";
describe('Phone constructor tests', () => {
    let phone: Phone;
    beforeEach(() => {
        phone = new Phone('Samsung', 'White Titan', 232, 7, 120);
    });
    it('Should create phone with correct properties', () => {
        expect(phone.model).toBe('Samsung');
        expect(phone.caseColor).toBe('White Titan');
        expect(phone.weightInGrams).toEqual(232);
        expect(phone.screenDiagonalInInches).toEqual(7);
        expect(phone.screenFrequency).toEqual(120);
    });
});
describe('Phone methods tests', () => {
    let phone: Phone;
    beforeEach(() => {
        phone = new Phone('Samsung', 'White Titan', 232, 7, 120);
    });
    it('Should display diagonal and frequency', () => {
        const info = 'Diagonal: 7, Frequency: 120'
        expect(phone.displayInfo()).toBe(info);
    })
})