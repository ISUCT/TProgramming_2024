import { funcRes } from '../functions';
import { taskA } from '../taskA';
import { taskB } from '../taskB';

describe('Testing...', () => {
  describe('funcRes.', () => {
    test('put zero', () => {
      expect(funcRes(0)).toBeNaN();
    });
    test('put 8', () => {
      expect(funcRes(8)).toStrictEqual(0.6394295145262177);
    });
    test('put -5', () => {
      expect(funcRes(-5)).toBeNaN();
    });
  });
  describe('taskA', () => {
    test('normal input.', () => {
      expect(taskA(1.5, 3.5, 0.4)).toStrictEqual([
        -12.050514435454069, -3421.1377910716424, 222.3016266177437, 27.05943703309871, 9.990239702388811,
        5.3598432723001705,
      ]);
    });
    test('input 0', () => {
      expect(taskA(0, 0, 0)).toBeNaN();
    });
    test('input negative', () => {
      expect(taskA(-5, -10, 1)).toBeNaN();
    });
    test('input Inf', () => {
      expect(taskA(Infinity, Infinity, Infinity)).toBeNaN();
    });
  });
  describe('taskB', () => {
    test('normal input.', () => {
      expect(taskB([1.9, 2.15, 2.34, 2.74, 3.16])).toStrictEqual([
        -3421.1377910716424, 1467.9587847094167, 160.23934429298492, 23.811906402437398, 8.947008695312515,
      ]);
    });
    test('input O', () => {
      expect(taskB([0, 0, 0, 0])).toBeNaN();
    });
    test('input Inf', () => {
      expect(taskB([Infinity, Infinity, Infinity])).toBeNaN();
    });
    test('input negative', () => {
      expect(taskB([-1, -2, -3, -4, -5])).toBeNaN();
    });
  });
});
