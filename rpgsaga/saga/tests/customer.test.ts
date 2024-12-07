import { Customer } from "../src/Customer";

describe('test log', () => {
    it('should return true', () => {
        const customer1 = new Customer('Roman', 32);
        expect(customer1.toString()).toEqual('У Customer toString() переопределён');
    })
    it('should return true', () => {
        const customer1 = new Customer('Artem', 50);
        expect(customer1.name).toEqual('Artem');
    })
    it('should return true', () => {
        const customer1 = new Customer('Andrey', 32);
        customer1.age = 40;
        expect(customer1.age).toEqual(40);
    })
});