import { Cat } from '../src/class_cat'

describe('Get methods tests', () => {
    const newCat = new Cat('Molly', 1, 'female', 'Russian Blue')

    it('Name get test', () => {
        expect(newCat.name === 'Molly')
    })
    it('Age get test', () => {
        expect(newCat.age === 1)
    })
    it('Sex get test', () => {
        expect(newCat.sex === 'female')
    })
    it('Breed get test', () => {
        expect(newCat.breed === 'Russian Blue')
    })

})

describe('Set methods tests', () => {
    const newCat = new Cat('Molly', 1, 'female', 'Russian Blue')

    it('Name set test', () => {
        newCat.name = 'Vasilisa'
        expect(newCat.name === 'Vasilisa')
    })


    it('Age set test with basic input', () => {
        newCat.age = 5
        expect(newCat.age === 5)
    })

    it('Age set test with negative input', () => {
        expect(() => {
            newCat.age = -100
        }).toThrow(Error('Age is invalid'))
    })

    it('Age set test with very big input', () => {
        expect(() => {
            newCat.age = 200
        }).toThrow(Error('Age is invalid'))
    })

    it('Sex set basic test', () => {
        newCat.sex = 'male'
        expect(newCat.sex === 'male')
    })

    it('Sex set test with very invalid input', () => {
        expect(() => {
            newCat.sex = 'aaaaaaaaaaaaa'
        }).toThrow(Error("Incorrect input of cat's sex"))
    })

    it('Breed set test', () => {
        expect(newCat.breed === 'Russian Blue')
    })

})

describe('Different methods test', ()=>{
    const newCat = new Cat('Molly', 1, 'female', 'Russian Blue')

    it ("Cat's meowing", ()=>{
        expect(newCat.meow() === `${newCat.name} says: Meow!`)
    })

    it ("Feeding the cat with normal amount of food", ()=>{
        expect(newCat.feedTheCat(200) === `You gave ${newCat.name} ${200} grams of food. Thank you!`)
    })

    it ("Feeding the cat with negative amount of food", ()=>{
        expect(()=>{
            newCat.feedTheCat(-100)
        }).toThrow(Error('You cannot enter a negative number of grams'))
    })
    
    it ("Feeding the cat with no food", ()=>{
        expect(()=>{
            newCat.feedTheCat(0)
        }).toThrow(Error('You are not feeding a cat'))
    })

    it('Renaming the cat', ()=>{

        const oldName = newCat.name; 
        const newName = 'Murka';
        
        const result = newCat.renameTheCat(newName);  
        
        expect(result).toBe(`${oldName} now named as ${newName}.`);
        expect(newCat.name).toBe(newName);
    })

})



