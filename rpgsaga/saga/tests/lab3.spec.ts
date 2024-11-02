import { SmartPhone } from '../src/lab3';

describe('SmartPhone Class', () => {
    const smartphone = new SmartPhone('Samsung', 'Galaxy S21', 80);

    it('should create a smartphone with correct properties', () => {
        expect(smartphone.brand).toBe('Samsung');
        expect(smartphone.model).toBe('Galaxy S21');
        expect(smartphone.battery).toBe(80);
    });

    it('should install an app correctly', () => {
        smartphone.installApp('Telegram');
        const installedApps = smartphone.getDeviceInfo();
        expect(installedApps).toContain('Installed Apps: Telegram');
    });

    it('should not install the same app twice', () => {
        smartphone.installApp('VK');
        const installedApps = smartphone.getDeviceInfo();
        expect(installedApps).toContain('Installed Apps: Telegram');
    });

    it('should return correct info from getDeviceInfo including apps', () => {
        expect(smartphone.getDeviceInfo()).toContain('Installed Apps: Telegram, VK');
    });

    it('should return correct info when no apps are installed', () => {
        const newSmartphone = new SmartPhone('Apple', 'iPhone 13', 90);
        expect(newSmartphone.getDeviceInfo()).toContain('Installed Apps: No apps installed');
    });

    it('should charge the battery correctly', () => {
        smartphone.chargeBattery(15);
        expect(smartphone.battery).toBe(95);
    });

    it('should throw an error for negative charge amount', () => {
        expect(() => { smartphone.chargeBattery(-5); }).toThrow('Charge amount must be positive');
    });
});