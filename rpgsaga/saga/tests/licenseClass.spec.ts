import { License } from "../src/license";
import { Certificate } from "../src/certificate";


describe('License full tests', () => {
    let license: License;
  
    beforeEach(() => {
      license = new License('Software License', 300, 2022, false);
    });
  
    it('should initialize properties correctly', () => {
      expect(license.documentType).toBe('Software License');
      expect(license.size).toBe(300);
      expect(license.yearOfCreation).toBe(2022);
      expect(license.expired).toBe(false);
    });
  
    it('should set and get the correct expired status', () => {
      expect(license.expired).toBe(false);
  
      expect(() => {
        license['expired'] = false as any;
      }).toThrow('License has invalid expired status (not boolean)');
    });
  
    it('should set and get the correct yearOfCreation', () => {
      expect(license.yearOfCreation).toBe(2022);
  
      license.yearOfCreation = 2023;
      expect(license.yearOfCreation).toBe(2023);
  
      expect(() => {
        license.yearOfCreation = -2023;
      }).toThrow('License has invalid year of creation');
    });
  
    it('should log the correct message when giveLicense is called', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      
      license.giveLicense();
      expect(consoleSpy).toHaveBeenCalledWith('The license which false was given to you at 2022 ');
  
      consoleSpy.mockRestore();
    });
  });