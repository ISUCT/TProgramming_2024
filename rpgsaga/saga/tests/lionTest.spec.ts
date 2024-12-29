import { Lion } from "../src/Classes/Animals/Lion";

describe('Animal class methods tests', () => {
    it('Constructor test', () => {
        let newLion = new Lion('TestAnimal', 8, 'Meat');

        expect(newLion.name == 'TestAnimal');
        expect(newLion.age == 8);
        expect(newLion.foodPreference == 'Meat'); 
    });

    describe('Get methods tests', () => {
        let newLion = new Lion('TestAnimal', 8, 'Meat');

        it('Name get test', () => {
            expect(newLion.name == 'TestAnimal');
        });

        it('Age get test', () => {
            expect(newLion.age == 8);
        });

        it('Food preference get test', () => {
            expect(newLion.foodPreference == 'Meat');
        });
    });

    describe('Set methods tests', () => {
        let newLion = new Lion('TestAnimal', 8, 'Meat');

        it('Name test', () => {
            newLion.name = 'Tigri';
            expect(newLion.name == 'Tigri');
        });

        it('Age test', () => {
            newLion.age = 10;
            expect(newLion.age == 10);
        });

        it('Age negative test', () => {
            expect(() => {
              newLion.age = -1;
            }).toThrow(Error('Недопустимый возраст'));
        });

        it('Food preference test', () => {
            newLion.foodPreference = 'Blueberry';
            expect(newLion.foodPreference == 'Blueberry');
        });
    });

    describe('Other methods tests', () => {
        let newLion = new Lion('Tigri', 8, 'Meat');

        it('Should return name, age and food preference', () => {
            expect(newLion.toString()).toEqual(`${newLion.name} ${newLion.age} ${newLion.foodPreference}`);
        });

        it('Should return age as a number', () => {
            expect(newLion.toNumber()).toEqual(newLion.age);
        });

        it('Should return all properties', () => {
            expect(newLion.print() == `name : ${newLion.name}\nage: ${newLion.age}\nfoodPreference: ${newLion.foodPreference}`);
        });

        it('Should return food preference', () => {
            expect(newLion.printFoodPreference()).toEqual(`Lion eat ${newLion.foodPreference}`)
        });
    });
});