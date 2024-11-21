import { City } from '../src/labs/lab3/city';

describe('Constructor test', () => {
  it('should create a bunny', () => {
    const city = new City('Test', 100000, 'Test');
    expect(city.name).toStrictEqual('Test');
    expect(city.population).toStrictEqual(100000);
    expect(city.country).toStrictEqual('Test');
  });
});

describe('SetPopulation func test', () => {
  it('should set 10000', () => {
    const bunny = new City('Test', 10000, 'Test');
    expect(bunny.population).toStrictEqual(10000);
  });
  it('should throw error', () => {
    expect(() => {
      new City('Test', -1, 'Test');
    }).toThrow('Wrong population');
  });
});

describe('SetCountry func test', () => {
  it('should set Russia', () => {
    const bunny = new City('Test', 5, 'Russia');
    expect(bunny.country).toStrictEqual('Russia');
  });
});

describe('SetCountry func test', () => {
  it('should set Moscow', () => {
    const bunny = new City('Moscow', 5, 'Test');
    expect(bunny.name).toStrictEqual('Moscow');
  });
});
