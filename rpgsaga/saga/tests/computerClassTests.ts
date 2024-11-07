import { Computer } from "../src/computerClass";
describe('Constructor tests', () => {
    let computer: Computer;
    beforeEach(() => {
      computer = new Computer('Intel i7', 512, 16, 'Zeus','Black', 9000);
    });
    it('Should create computer with right properties', () => {
        expect(computer.processorModel).toBe('Intel i7');
        expect(computer.hardDriveCapacity).toEqual(512);
        expect(computer.randomAccesMemoryValue).toEqual(16);
        expect(computer.model).toBe('Zeus');
        expect(computer.caseColor).toBe('Black');
        expect(computer.weightInGrams).toEqual(9000);
    });
    it('Should throw Error if value of RAM is invalid', () => {
        expect(() => {
            computer['randomAccesMemoryValue'] = 1;
        }).toThrow('Invalid value of RAM');
    });
    it('Should throw Error if Hard Drive capacity is wrong', () => {
        expect(() => {
            computer['hardDriveCapacity'] = 52;
        }).toThrow('Invalid capacity');
    });
    it(('Shold correctly set processor model'), () => {
        computer.processorModel = 'Intel i9';
        expect(computer['processorModel']).toBe('Intel i9');
    });  
});
describe('Computer methods checks', () => {
    let computer: Computer;
    beforeEach(() => {
        computer = new Computer('Intel i7', 512, 16, 'Zeus','Black', 9000)
    });
    it('Should return correct info about computer', () => {
        const info = 'Processor model: Intel i7, Hard Drive Capacity: 512, RAM value: 16, Model Name: Zeus, Case color: Black, Weight in grams: 9000'
        expect(computer.displayInfo()).toBe(info);
    });
    it('Should correctly determine performance', () => {
        computer['randomAccesMemoryValue'] = 4;
        expect(computer.perfomance()).toBe('Low Perfomance');
        computer['randomAccesMemoryValue'] = 8;
        expect(computer.perfomance()).toBe('Mid Perfomance');
        computer['randomAccesMemoryValue'] = 32;
        expect(computer.perfomance()).toBe('High Perfomance');
    });
});