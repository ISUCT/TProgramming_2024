import { Certificate } from "../src/certificate";

class TestCertificate extends Certificate {
  constructor(documentType: string, size: number, yearOfCreation: number) {
    super(documentType, size, yearOfCreation);
  }
}

describe('Certificate test', () => {
  let certificate: TestCertificate;

  beforeEach(() => {
    certificate = new TestCertificate('Diplom', 200, 2021);
  });

  describe('Constructor', () => {
    it('should initialize the properties correctly', () => {
      expect(certificate.documentType).toBe('Diplom');
      expect(certificate.size).toBe(200);
      expect(certificate.yearOfCreation).toBe(2021);
    });
  });

  describe('Setters and Getters', () => {
    it('should get the correct size', () => {
      expect(certificate.size).toBe(200);
    });

    it('should get the correct documentType', () => {
      expect(certificate.documentType).toBe('Diplom');
    });

    it('should get the correct yearOfCreation', () => {
      expect(certificate.yearOfCreation).toBe(2021);
    });

    it('should throw an error when setting an invalid size', () => {
      expect(() => {
        certificate['size'] = -100; 
      }).toThrow('Document of type Diplom has invalid size');
    });

    it('should throw an error when setting an invalid year of creation', () => {
        expect(() => {
          certificate['yearOfCreation'] = -500; 
        }).toThrow('Document of type Diplom has invalid year of creation');
      });

    it('should not throw error when setting a valid year of creation', () => {
      expect(() => {
        certificate['yearOfCreation'] = 2021; 
      }).not.toThrow();
      expect(certificate.yearOfCreation).toBe(2021);
    });  

    it('should not throw error when setting a valid size', () => {
      expect(() => {
        certificate['size'] = 300; 
      }).not.toThrow();
      expect(certificate.size).toBe(300);
    });
  });

  describe('deleteDocument method', () => {
    it('should log the correct message when deleteDocument is called', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      certificate.deleteDocument();
      expect(consoleSpy).toHaveBeenCalledWith('Certificate of type Diplom created 2021 was sent to the recycle bin');
      consoleSpy.mockRestore(); 
    });
  });
});