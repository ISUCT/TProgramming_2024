/* import { calc, taskA, taskB } from "../src";

  describe('calc', () => {
    test('should calculate the correct value for given inputs', () => {
      expect(calc(4.1, 2.7, 1.5)).toEqual(-147.11354248765136);
      expect(calc(4.1, 2.7, 3.5)).toEqual(65.43335018518418);
    });
  });

  describe('taskA', () => {
    test('should return the correct array of values for TaskA', () => {
      const result = taskA(1.5, 3.5, 4.1, 2.7, 0.4);
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


  describe('taskB', () => {
    test('should return the correct array of values for TaskB', () => {
      const result = taskB(4.1, 2.7, [1.9, 2.15, 2.34, 2.74, 3.16]);
      expect(result).toEqual([
        -41765.49494867797,
        17920.94588170439,
        1956.2133808564818,
        290.6974571924121,
        109.22572234449581
      ]);
    });
  }); */

import { Dog } from '../src/class_dog';

describe('Constructor test', () => {
  it('should create a dog', () => {
    const dog = new Dog('Test', 10, 20);
    expect(dog.name).toStrictEqual('Test');
    expect(dog.age).toStrictEqual(10);
    expect(dog.weight).toStrictEqual(20);
  });
});

describe('Constructor test', () => {
  it('should create a dog', () => {
    const dog = new Dog('Test', -10, 20);
    expect(dog.name).toStrictEqual('Test');
    expect(dog.age).toStrictEqual(-10);
    expect(dog.weight).toStrictEqual(20);
  });
});

describe('Constructor test', () => {
  it('should create a dog', () => {
    const dog = new Dog('Test', -10, -20);
    expect(dog.name).toStrictEqual('Test');
    expect(dog.age).toStrictEqual(-10);
    expect(dog.weight).toStrictEqual(-20);
  });
});

describe('SetAge func test', () => {
  it('should set 5', () => {
    const dog = new Dog('Test', 5, 2);
    expect(dog.age).toStrictEqual(5);
  });
  it('should throw error', () => {
    expect(() => {
      new Dog('Test', 100, 5);
    }).toThrow('Wrong age');
  });
});

describe('SetWeight func test', () => {
  it('should set 10', () => {
    const dog = new Dog('Test', 5, 10);
    expect(dog.weight).toStrictEqual(10);
  });
  it('should throw error', () => {
    expect(() => {
      new Dog('Test', 2, 200);
    }).toThrow('Wrong weight');
  });
});
