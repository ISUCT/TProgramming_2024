import { Animal } from '../src/ClassTask/class_animal';
import { Cat } from '../src/ClassTask/class_cat'
import { Bird } from '../src/ClassTask/class_bird'

describe('Cat class set method tests', () => {
    it('Set name test', () => {
        const newCat = new Cat('Molly', 2, 'female', 'Persian', true);
        newCat.setName = 'Fluffy';
        expect(newCat.getName === 'Fluffy');
    });

    it('Set age valid test', () => {
        const newCat = new Cat('Molly', 2, 'female', 'Persian', true);
        newCat.setAge = 5;
        expect(newCat.getAge === 5);
    });

    it('Set age invalid test (negative age)', () => {
        const newCat = new Cat('Molly', 2, 'female', 'Persian', true);
        expect(() => (newCat.setAge = -1)).toThrow('Age is invalid');
    });

    it('Set age invalid test (age exceeds limit)', () => {
        const newCat = new Cat('Molly', 2, 'female', 'Persian', true);
        expect(() => (newCat.setAge = 100)).toThrow('Age is invalid');
    });

    it('Set sex valid test', () => {
        const newCat = new Cat('Molly', 2, 'female', 'Persian', true);
        newCat.setSex = 'male';
        expect(newCat.getSex === 'male');
    });

    it('Set sex invalid test', () => {
        const newCat = new Cat('Molly', 2, 'female', 'Persian', true);
        expect(() => (newCat.setSex = 'unknown')).toThrow("Incorrect input of animal's sex");
    });

    it('Set breed test', () => {
        const newCat = new Cat('Molly', 2, 'female', 'Persian', true);
        newCat.setBreed = 'Sphynx';
        expect(newCat.getBreed === 'Sphynx');
    });

    it('Set isIndoorCat test', () => {
        const newCat = new Cat('Molly', 2, 'female', 'Persian', true);
        newCat.setIsIndoorCat = false;
        expect(newCat.getIsIndoorCat === false);
    });
});


describe('Cat class tests', () => {
    it('Name get test', () => {
        const newCat = new Cat('Musya', 2, 'female', 'Russian Blue', true);
        expect(newCat.getName === 'Musya');
    });

    it('Age get test', () => {
        const newCat = new Cat('Musya', 2, 'female', 'Russian Blue', true);
        expect(newCat.getAge === 2);
    });

    it('Sex get test', () => {
        const newCat = new Cat('Musya', 2, 'female', 'Russian Blue', true);
        expect(newCat.getSex === 'female');
    });

    it('Breed get test', () => {
        const newCat = new Cat('Musya', 2, 'female', 'Russian Blue', true);
        expect(newCat.getBreed === 'Russian Blue');
    });

    it('isIndoorCat get test', () => {
        const newCat = new Cat('Musya', 2, 'female', 'Russian Blue', true);
        expect(newCat.getIsIndoorCat === true);
    });

    it('Rename the cat test', () => {
        const newCat = new Cat('Musya', 2, 'female', 'Russian Blue', true);
        newCat.renameTheCat('Fluffy');
        expect(newCat.getName === 'Fluffy');
    });

    it('Feed the cat positive test', () => {
        const newCat = new Cat('Musya', 2, 'female', 'Russian Blue', true);
        const message = newCat.feedTheCat(50);
        expect(message === 'You gave Musya 50 grams of food. Thank you!');
    });

    it('Feed the cat negative grams test', () => {
        const newCat = new Cat('Musya', 2, 'female', 'Russian Blue', true);
        expect(() => newCat.feedTheCat(-10)).toThrow('You cannot enter a negative number of grams');
    });

    it('Feed the cat zero grams test', () => {
        const newCat = new Cat('Musya', 2, 'female', 'Russian Blue', true);
        expect(() => newCat.feedTheCat(0)).toThrow('You are not feeding a cat');
    });

    it('Make sound test', () => {
        const newCat = new Cat('Musya', 2, 'female', 'Russian Blue', true);
        expect(newCat.makeSound() === 'Musya says: Meow!');
    });

    it('toString test', () => {
        const newCat = new Cat('Musya', 2, 'female', 'Russian Blue', true);
        expect(
            newCat.toString() ===
            'Cat [name = Musya, age = 2, sex = female, breed = Russian Blue, isIndoorCat = true]'
        );
    });
})

describe('Bird class tests', () => {

    it('Name get test', () => {
        const newBird = new Bird('Tweety', 1, 'female', 'Canary', true);
        expect(newBird.getName === 'Tweety');
    });

    it('Age get test', () => {
        const newBird = new Bird('Tweety', 1, 'female', 'Canary', true);
        expect(newBird.getAge === 1);
    });

    it('Sex get test', () => {
        const newBird = new Bird('Tweety', 1, 'female', 'Canary', true);
        expect(newBird.getSex === 'female');
    });

    it('Breed get test', () => {
        const newBird = new Bird('Tweety', 1, 'female', 'Canary', true);
        expect(newBird.getBreed === 'Canary');
    });

    it('CanFly get test', () => {
        const newBird = new Bird('Kiwi', 2, 'male', 'Kiwi', false);
        expect(newBird.getCanFly === false);
    });

    it('toString test', () => {
        const newBird = new Bird('Tweety', 1, 'female', 'Canary', true);
        expect(
            newBird.toString() ===
            'Bird [name = Tweety, age = 1, sex = female, breed = Canary, canFly = true]'
        );
    });

    it('Make sound test', () => {
        const newBird = new Bird('Tweety', 1, 'female', 'Canary', true);
        expect(newBird.makeSound() === 'Tweety says: Chirp!');
    });

})

describe('Bird set tests', () => {
    it('Set name test', () => {
        const newBird = new Bird('Tweety', 1, 'female', 'Canary', true);
        newBird.setName = 'Sunny';
        expect(newBird.getName === 'Sunny');
    });

    it('Set age valid test', () => {
        const newBird = new Bird('Tweety', 1, 'female', 'Canary', true);
        newBird.setAge = 3;
        expect(newBird.getAge === 3);
    });

    it('Set age invalid test (negative)', () => {
        const newBird = new Bird('Tweety', 1, 'female', 'Canary', true);
        expect(() => (newBird.setAge = -1)).toThrow('Age is invalid');
    });

    it('Set age invalid test (too high)', () => {
        const newBird = new Bird('Tweety', 1, 'female', 'Canary', true);
        expect(() => (newBird.setAge = 100)).toThrow('Age is invalid');
    });

    it('Set sex valid test', () => {
        const newBird = new Bird('Tweety', 1, 'female', 'Canary', true);
        newBird.setSex = 'male';
        expect(newBird.getSex === 'male');
    });

    it('Set sex invalid test', () => {
        const newBird = new Bird('Tweety', 1, 'female', 'Canary', true);
        expect(() => (newBird.setSex = 'unknown')).toThrow("Incorrect input of animal's sex");
    });

    it('Set breed test', () => {
        const newBird = new Bird('Tweety', 1, 'female', 'Canary', true);
        newBird.setBreed = 'Parrot';
        expect(newBird.getBreed === 'Parrot');
    });

    it('Set canFly test', () => {
        const newBird = new Bird('Tweety', 1, 'female', 'Canary', true);
        newBird.setCanFly = false;
        expect(newBird.getCanFly === false);
    });

})

describe('Polymorphism tests', () => {
    it('Array of Animal instances with Cat and Bird', () => {
        const cat = new Cat('Musya', 2, 'female', 'Russian Blue', true);
        const bird = new Bird('Tweety', 1, 'female', 'Canary', true);

        const animals: Animal[] = [cat, bird];

        expect(animals.length === 2);
    });

    it('Polymorphic makeSound calls', () => {
        const cat = new Cat('Musya', 2, 'female', 'Russian Blue', true);
        const bird = new Bird('Tweety', 1, 'female', 'Canary', true);

        const animals: Animal[] = [cat, bird];

        expect(animals[0].makeSound() === 'Whiskers says: Meow!');
        expect(animals[1].makeSound() === 'Tweety says: Chirp!');
    });

    it('Polymorphic toString calls', () => {
        const cat = new Cat('Musya', 2, 'female', 'Russian Blue', true);
        const bird = new Bird('Tweety', 1, 'female', 'Canary', true);

        const animals: Animal[] = [cat, bird];

        expect(
            animals[0].toString() ===
            'Cat [name = Musya, age = 2, sex = female, breed = Russian Blue, isIndoorCat = true]'
        );
        expect(
            animals[1].toString() ===
            'Bird [name = Tweety, age = 1, sex = female, breed = Canary, canFly = true]'
        );
    });
});

