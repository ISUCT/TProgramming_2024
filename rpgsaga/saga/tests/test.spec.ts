import { calc, TaskA, TaskB } from "../src";

  describe('calc', () => {
    test('should calculate the correct value for given inputs', () => {
      expect(calc(4.1, 2.7, 1.5)).toEqual(-147.11354248765136);
      expect(calc(4.1, 2.7, 3.5)).toEqual(65.43335018518418);
    });
  });

  describe('TaskA', () => {
    test('should return the correct array of values for TaskA', () => {
      const result = TaskA(1.5, 3.5, 4.1, 2.7, 0.4);
      expect(result).toEqual([
        -147.11354248765136,
        -41765.49494867797,
        2713.8741642668447,
        330.3435435045555,
        121.96156112598518,
        65.43335018518421
      ]);
    });
  });


  describe('TaskB', () => {
    test('should return the correct array of values for TaskB', () => {
      const result = TaskB(4.1, 2.7, [1.9, 2.15, 2.34, 2.74, 3.16]);
      expect(result).toEqual([
        -41765.49494867797,
        17920.94588170439,
        1956.2133808564818,
        290.6974571924121,
        109.22572234449581
      ]);
    });
  });