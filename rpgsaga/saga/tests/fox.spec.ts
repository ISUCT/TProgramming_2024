import { fox } from "../src/fox"

describe('Fox class methods tests',()=>{
    it('Constructor test', ()=>{
        let newFox = new fox('TestFox',10,'Male')
        expect(newFox.age == 10)
        expect(newFox.name == 'TestFox')
        expect(newFox.sex == 'Male' )
    })
    describe('Get methods tests',()=>{
        let newFox = new fox('TestFox',10,'Male')
        it('Name get test',()=>{
            expect(newFox.name == 'TestFox')
        })
        it('Age get test',()=>{
            expect(newFox.age == 10)
        })
        it('Sex get test',()=>{
            expect(newFox.sex == 'Male')
        })
    })
    describe('Set methods tests', ()=>{
        let newFox = new fox('TestFox',10,'Male')
        it('Name test',()=>{
            newFox.name = 'Roger'
            expect(newFox.name == 'Roger')
        })
        it('Age basic test',()=>{
            newFox.age = 20
            expect(newFox.age == 20)
        })
        it('Age negative test',()=>{
            expect(()=>{
                newFox.age = -20
            }).toThrow(Error('Negative age'))
        })
        it('Sex basic test',()=>{
            newFox.sex = 'Female'
            expect(newFox.sex == 'Female')
        })
        it('Age uncorrect test',()=>{
            expect(()=>{
                newFox.sex = 'Helicopter'
            }).toThrow(Error('Uncorrect sex parametr'))
        })
    })
    describe('Other funcs tests',()=>{
        let newFox = new fox('TestFox',10,'Male')
        it('Fox says', ()=>{
            expect(newFox.whatTheFoxSay() == `${newFox.name}: FoxSound.mp3`)
        })
        it('Fox sleep',()=>{
            expect(newFox.foxSleep(10) == `${newFox.name} sleeps ${10} hours`)
        })
        it('Fox try`s to sleep zero number of hours',()=>{
            expect(()=>{
                newFox.foxSleep(0)
            }).toThrow(Error('The fox is not sleeping'))
        })
        it('Fox try`s to sleep negative number of hours',()=>{
            expect(()=>{
                newFox.foxSleep(-10)
            }).toThrow(Error('Fox cannot sleep a negative number of hours'))
        })
        it('Fox runs',()=>{
            expect(newFox.foxRun(0,5) == `${newFox.name} ran 5 meters`)
        })
        it('Fox runs in negative direction',()=>{
            expect(newFox.foxRun(-1,-10) == `${newFox.name} ran 9 meters`)
        })
    })
})