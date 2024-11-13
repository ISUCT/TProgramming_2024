import { Bunny } from '../src/bunny';

describe('Constructor test', () => {
  it('should create a bunny', () => {
    const bunny = new Bunny('Test', 2, 5);
    expect(bunny.name).toStrictEqual('Test');
    expect(bunny.age).toStrictEqual(2);
    expect(bunny.weight).toStrictEqual(5);
  });
});

describe('SetAge func test', () => {
  it('should set 5', () => {
    const bunny = new Bunny('Test', 5, 2);
    expect(bunny.age).toStrictEqual(5);
  });
  it('should throw error', () => {
    expect(() => {
      new Bunny('Test', 200, 5);
    }).toThrow('Wrong age');
  });
});

describe('SetWeight func test', () => {
  it('should set 4', () => {
    const bunny = new Bunny('Test', 5, 4);
    expect(bunny.weight).toStrictEqual(4);
  });
  it('should throw error', () => {
    expect(() => {
      new Bunny('Test', 2, 500);
    }).toThrow('Wrong weight');
  });
});
