import { Giraffe } from "../src/Classes/Animals/Giraffe";

describe('Animal class methods tests', () => {
    it('Constructor test', () => {
        let newGiraffe = new Giraffe('TestAnimal', 5, 'Pie');

        expect(newGiraffe.name == 'TestAnimal');
        expect(newGiraffe.age == 5);
        expect(newGiraffe.foodPreference == 'Pie'); 
    });

    describe('Get methods tests', () => {
        let newGiraffe = new Giraffe('TestAnimal', 5, 'Pie');

        it('Name get test', () => {
            expect(newGiraffe.name == 'TestAnimal');
        });

        it('Age get test', () => {
            expect(newGiraffe.age == 5);
        });

        it('Food preference get test', () => {
            expect(newGiraffe.foodPreference == 'Pie');
        });
    });

    describe('Set methods tests', () => {
        let newGiraffe = new Giraffe('TestAnimal', 5, 'Pie');

        it('Name test', () => {
            newGiraffe.name = 'Ashley';
            expect(newGiraffe.name == 'Ashley');
        });

        it('Age test', () => {
            newGiraffe.age = 10;
            expect(newGiraffe.age == 10);
        });

        it('Age negative test', () => {
            expect(() => {
              newGiraffe.age = -1;
            }).toThrow(Error('Недопустимый возраст'));
        });

        it('Food preference test', () => {
            newGiraffe.foodPreference = 'Chips';
            expect(newGiraffe.foodPreference == 'Chips');
        });
    });

    describe('Other methods tests', () => {
        let newGiraffe = new Giraffe('Ashley', 7, 'Plants');

        it('Should return name, age and food preference', () => {
            expect(newGiraffe.toString()).toEqual(`${newGiraffe.name} ${newGiraffe.age} ${newGiraffe.foodPreference}`);
        });

        it('Should return age as a number', () => {
            expect(newGiraffe.toNumber()).toEqual(newGiraffe.age);
        });

        it('Should return all properties', () => {
            expect(newGiraffe.print() == `name : ${newGiraffe.name}\nage: ${newGiraffe.age}\nfoodPreference: ${newGiraffe.foodPreference}`);
        });

        it('Should return food preference', () => {
            expect(newGiraffe.printFoodPreference()).toEqual(`Giraffe eat ${newGiraffe.foodPreference}`)
        });
    });
});