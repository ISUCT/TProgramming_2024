import * as pointEngine from '../../src/lab1/funcs';

// Let test our task.
it('should be empty if end >= start.', () => {
  expect(pointEngine.calculateSteps(2, 3, 5, -5, 10)).toStrictEqual([]);
});

it('Should be NaN with x < 0 (function undefined).', () => {
  expect(pointEngine.calculateSinglePoint(-1, 1, 1)).toBeNaN();
});

it('Should map values to each point.', () => {
  const results = pointEngine.calculatePoints(4.1, 2.7, [1.9, 2.15, 2.34, 2.73, 3.16]);
  const expected = [-43.41933128760677, 33.82628962334502, 16.55647493271172, 9.285335279100194, 6.957612791897907];
  const epsilon = 0.1;

  const hasDeviation: Array<boolean> = [];

  results.forEach((v, i) => {
    hasDeviation[i] = v - expected[i] > epsilon;
  });
  expect(hasDeviation).toStrictEqual([false, false, false, false, false]);
});
