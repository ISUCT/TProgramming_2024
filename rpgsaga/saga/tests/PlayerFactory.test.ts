import { PlayerFactory } from "../src/lib";
import { Archer, Knight, Mage } from "../src/services";


describe('PlayerFactory', () => {
  let factory;

  beforeEach(() => {
    factory = new PlayerFactory(); // Создаем экземпляр фабрики перед каждым тестом
  });

  it('should create a Knight when passed "Knight"', () => {
    const knight = factory.createPlayer('Knight');
    expect(knight).toBeInstanceOf(Knight);
  });

  it('should create an Archer when passed "Archer"', () => {
    const archer = factory.createPlayer('Archer');
    expect(archer).toBeInstanceOf(Archer);
  });

  it('should create a Mage when passed "Mage"', () => {
    const mage = factory.createPlayer('Mage');
    expect(mage).toBeInstanceOf(Mage);
  });
});