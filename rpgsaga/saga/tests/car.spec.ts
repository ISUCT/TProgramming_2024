import { Car } from "../src/funcAndClass/Car";

describe('test for constructor', () => {
    it ('1) constructor', () => {
        let newCar = new Car ('Volkswagen', 200, 'manual');
        expect(newCar.model).toBe('Volkswagen');
        expect(newCar.speed).toEqual(200);
        expect(newCar.transmission).toBe('manual');
    })})

describe('tests for getters', () => {
    let newCar = new Car ('Volkswagen', 200, 'manual');   
    it ('2) get model', () => {
        expect(newCar.model).toBe('Volkswagen');})
    it ('3) get speed', () => {
        expect(newCar.speed).toEqual(200);})
    it ('4) get transmission', () => {
        expect(newCar.transmission).toBe('manual');})
    })

describe('tests for setters', () => { 
    let newCar = new Car ('Volkswagen', 200, 'manual');  
    it ('5) set model', () => {
        newCar.model = 'Zhiguly';
        expect(newCar.model).toBe('Zhiguly');})

    it ('6) set speed', () => {
        expect(() => {
        newCar.speed = 80;
        expect(newCar.speed).toEqual(80);})})

    it ('7) set impossible speed', () => {
        expect(() => {newCar.speed = -200}).toThrow(Error('impossible speed'));})

    it ('8) set transmission', () => {
        newCar.transmission = 'semi-automatic';
        expect(newCar.transmission).toBe('semi-automatic');})

    it ('9) set incorrect transmission', () => {
        expect(() => {newCar.transmission = 'qwerty';}).toThrow(Error('transmission only can be manual, automatic or semi-automatic'));})
    })


describe('tests for other methods', () => {
    it('model and speed', () => {
        let newCar = new Car('Volkswagen', 200, 'manual')
        expect(newCar.toString()).toEqual(`model: ${newCar.model}, type: ${newCar.transmission}`);
      });

    it('display newCar', () => {
        let newCar = new Car ('Volkswagen', 200, 'manual')
        expect(newCar.print()).toEqual(`model: ${newCar.model}, type: ${newCar.transmission}, maxSpeed: ${newCar.speed}`);
      });
    })
