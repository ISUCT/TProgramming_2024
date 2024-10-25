import { Logger } from '../../src/utils/output/Logger';

describe('Logger class methods tests', () => {
  it('method log test', () => {
    expect(Logger.log('Игра началась!')).toEqual(console.log('Игра началась!'));
  });
});
