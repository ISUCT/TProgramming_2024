import { Phone } from '../src/lab2';

describe('Phone Class', () => {
    const phone: Phone = new Phone('123-456-789', 'Apple', 'iPhone 15', 75);

    it('should create a phone with correct properties', () => {
        expect(phone.number).toBe('123-456-789');
        expect(phone.brand).toBe('Apple');
        expect(phone.model).toBe('iPhone 15');
        expect(phone.battery).toBe(75);
    });

    it('should change the phone\'s number', () => {
        phone.number = '987-654-321';
        expect(phone.number).toBe('987-654-321');
    });

    it('should throw an error for empty number', () => {
        expect(() => { phone.number = ''; }).toThrow('Value cannot be empty');
    });

    it('should change the phone\'s brand', () => {
        phone.brand = 'Samsung';
        expect(phone.brand).toBe('Samsung');
    });

    it('should throw an error for empty brand', () => {
        expect(() => { phone.brand = ''; }).toThrow('Value cannot be empty');
    });

    it('should change the phone\'s model', () => {
        phone.model = 'iPhone 12';
        expect(phone.model).toBe('iPhone 12');
    });

    it('should throw an error for empty model', () => {
        expect(() => { phone.model = ''; }).toThrow('Value cannot be empty');
    });

    it('should throw an error for incorrect battery level', () => {
        expect(() => { phone.battery = -10; }).toThrow('Battery must be between 0 and 100');
        expect(() => { phone.battery = 110; }).toThrow('Battery must be between 0 and 100');
    });

    it('should charge the battery correctly', () => {
        phone.chargeBattery(20);
        expect(phone.battery).toBe(95);
    });

    it('should not exceed battery level of 100', () => {
        phone.chargeBattery(10); // Attempt to charge beyond 100
        expect(phone.battery).toBe(100);
    });

    it('should throw an error for negative charge amount', () => {
        expect(() => { phone.chargeBattery(-5); }).toThrow('Charge amount must be positive');
    });

    it('should allow making a call if battery level is sufficient', () => {
        phone.call('098-765-532');
        expect(phone.battery).toBe(95);
    });

    it('should not allow a call if the battery level is too low', () => {
        phone.battery = 5;
        console.log = jest.fn();
        phone.call('098-765-533');
        expect(console.log).toHaveBeenCalledWith('Low battery level to make a call');
    });

    it('should return correct info from getInfo', () => {
        expect(phone.getInfo()).toContain('Phone Info:');
        expect(phone.getInfo()).toContain('Number: 987-654-321');
        expect(phone.getInfo()).toContain('Brand: Samsung');
        expect(phone.getInfo()).toContain('Model: iPhone 12');
        expect(phone.getInfo()).toContain('Battery Level: 5%');
    });
});