import { Parrot } from "../src/Classes/ParrotClass";

describe('Parrot',()=> {
    let parrot: Parrot;
    beforeEach(()=>{
        parrot = new Parrot('Sergey',4,'Black','Male',1.5);
    })
    it('Should return right info',()=>{
        expect(parrot.name).toBe('Sergey')
        expect(parrot.age).toBe(4)
        expect(parrot.color).toBe('Black')
        expect(parrot.gender).toBe('Male')
        expect(parrot.vocabulary).toBe(1.5)
    })
    it('Should return Error when age is invalid',()=>{
        expect(()=>{
            parrot.age = -1
        }).toThrow('Invalid age')
        expect(()=>{
            parrot.age = 100
        }).toThrow('Invalid age')
    })
    it('Should return Error when gender is invalid',()=>{
        expect(()=>{
            parrot.gender='Mechanic'
        }).toThrow('Invalid gender')
    })
    it('Should return Error when vocabulary has impossible value',()=>{
        expect(()=>{
            parrot.vocabulary = -1
        }).toThrow('Impossible vocabulary')
        expect(()=>{
            parrot.vocabulary = 22
        }).toThrow('Impossible vocabulary')
    })
})