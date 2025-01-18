import { Rabbit } from "../src/Classes/RabbitClass";

describe('Rabbit',()=> {
    let rabbit: Rabbit;
    beforeEach(()=>{
        rabbit = new Rabbit('Sergey',4,'Black','Male',1.5);
    })
    it('Should return right info',()=>{
        expect(rabbit.name).toBe('Sergey')
        expect(rabbit.age).toBe(4)
        expect(rabbit.color).toBe('Black')
        expect(rabbit.gender).toBe('Male')
        expect(rabbit.jump).toBe(1.5)
    })
    it('Should return Error when age is invalid',()=>{
        expect(()=>{
            rabbit.age = -1
        }).toThrow('Invalid age')
        expect(()=>{
            rabbit.age = 100
        }).toThrow('Invalid age')
    })
    it('Should return Error when gender is invalid',()=>{
        expect(()=>{
            rabbit.gender='Mechanic'
        }).toThrow('Invalid gender')
    })
    it('Should return Error when jump has impossible value',()=>{
        expect(()=>{
            rabbit.jump = -1
        }).toThrow('Impossible jump')
        expect(()=>{
            rabbit.jump = 52
        }).toThrow('Impossible jump')
    })
})