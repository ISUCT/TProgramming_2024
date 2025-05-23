import { Monitor } from "../src/labs/monitorClass";

describe("Phone", () => {
    let monitor: Monitor;
  
    beforeEach(() => {
      monitor = new Monitor('IPS','Mucai','ZV', 256, 23.8, 7331);
    });
  
    test("must create an instance of the phone class with valid properties", () => {
      expect(monitor.typeOfMatrix).toBe('IPS');
      expect(monitor.brand).toBe('Mucai');
      expect(monitor.model).toBe('ZV');
      expect(monitor.colourDepth).toBe(256);
      expect(monitor.diagonal).toBe(23.8);
      expect(monitor.id).toBe(7331);
    });
  
    test("must set brand correctly", () => {
      monitor.brand = "AOC";
      expect(monitor.brand).toBe("AOC");
    });
  
    test("must set model correctly", () => {
      monitor.model = "U2879VF";
      expect(monitor.model).toBe("U2879VF");
    });
  
    test("must throw an error if diagonal less than 0", () => {
      expect(() => {
        monitor.diagonal = -11;
      }).toThrow('diagonal must be greater than 0');
    });

    test("must return the required phrase", () => {
      let phrase = monitor.getInfo();
      expect(phrase).toBe("Монитор Mucai ZV с серийным номер 7331, имеет размер 23.8, тип матрицы IPS и глубину цвета 256");
    });
  
});