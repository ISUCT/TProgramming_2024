import { DocumentClass } from "../src/classes";

describe('constructor tests', () => {
    let document: DocumentClass;
    beforeEach(() => {
      document = new DocumentClass('Report', 10, 2021);
    });
    it('should create a document with valid parameters', () => {
        expect(document.getDocumentType()).toBe('Report');
        expect(document.getDocumentSize()).toBe(10);
        expect(document.getDocumentDate()).toBe(2021);
    });
    it('should return the correct document type', () => {
            expect(document.getDocumentType()).toBe('Report');
    });

    it('should return the correct document size', () => {
        expect(document.getDocumentSize()).toBe(10);
    });

    it('should return the correct year of creation', () => {
        expect(document.getDocumentDate()).toBe(2021);
    });
});

describe('methods tests', () => {
    let document: DocumentClass;
    beforeEach(() => {
      document = new DocumentClass('Report', 10, 2021);
    });
    it('should push a error for invalid size (negative value)', () => {
        expect(() => {
            document.setSize(-5);
        }).toThrow('Document of type Report has invalid size');
    });
    it('should push a error for invalid size (zero)', () => {
        expect(() => {
            document.setSize(0);
        }).toThrow('Document of type Report has invalid size');
    });
    it('should log the correct delete message', () => {
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
        document.deleteDocument();
        expect(consoleLogSpy).toHaveBeenCalledWith(`Document of type Report created 2021 was sent to the recycle bin`);
    });
    it('should push a error for invalid date of creation (negative date)', () => {
        expect(() => {
            document.setYearOfCreation(-250)
        }).toThrow('Document of type Report has invalid year of creation');
    });
    it('should push a error for invalid date of creation (zero date)', () => {
        expect(() => {
            document.setYearOfCreation(0)
        }).toThrow('Document of type Report has invalid year of creation');
    });
});