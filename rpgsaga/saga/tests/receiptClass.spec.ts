import { Receipt } from "../src/receipt";
import { Certificate } from "../src/certificate";

describe('Receipt full tests', () => {
    let receipt: Receipt;
  
    beforeEach(() => {
      receipt = new Receipt('Receipt', 150, 2023, 100, 3);
    });
  
    it('should initialize properties correctly', () => {
      expect(receipt.documentType).toBe('Receipt');
      expect(receipt.size).toBe(150);
      expect(receipt.yearOfCreation).toBe(2023);
      expect(receipt.amount).toBe(100);
      expect(receipt.numberOfPurchases).toBe(3);
    });
  
    it('should set and get the correct amount', () => {
      expect(receipt.amount).toBe(100);
  
      expect(() => {
        receipt['amount'] = 200;
      }).not.toThrow();
      expect(receipt.amount).toBe(200);
  
      expect(() => {
        receipt['amount'] = -50;
      }).toThrow('Receipt has invalid amount (negative or null)');
    });
  
    it('should set and get the correct numberOfPurchases', () => {
      expect(receipt.numberOfPurchases).toBe(3);

      expect(() => {
        receipt['numberOfPurchases'] = 5;
      }).not.toThrow();
      expect(receipt.numberOfPurchases).toBe(5);
  
      expect(() => {
        receipt['numberOfPurchases'] = -1;
      }).toThrowError('Receipt has invalid amount (negative or null)');
    });
  
    it('should log the correct message when giveReceipt is called', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      receipt.giveReceipt();
      expect(consoleSpy).toHaveBeenCalledWith('The recepeit with amount of 100$ and 3 number of purchases was given to buyer');
      consoleSpy.mockRestore();
    });
  });