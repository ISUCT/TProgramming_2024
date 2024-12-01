import { Product } from '../../src/SuperClass/Product';
import Drink from '../../src/SuperClass/Drink';
import Dish from '../../src/SuperClass/Dish';

class TestProduct extends Product {
  details(): string {
    return `Test Product details`;
  }
}

describe('Product, Drink, and Dish classes', () => {
  describe('Product', () => {
    let product: Product;

    beforeEach(() => {
      product = new TestProduct(100, 'TestProduct');
    });

    it('should set name and price correctly', () => {
      expect(product.name).toBe('TestProduct');
      expect(product.price).toBe(100);
    });

    it('should throw an error if price is zero or negative', () => {
      expect(() => {
        product.price = -1;
      }).toThrow('Цена должна быть больше 0 рублей');
    });

    it('should throw an error if name is empty or whitespace', () => {
      expect(() => {
        product.name = '';
      }).toThrow('Название не может быть пустым');
    });

    it('should return a correct toString output', () => {
      expect(product.toString()).toBe('Product: TestProduct, Price: 100 рублей');
    });
  });

  describe('Drink', () => {
    let drink: Drink;

    beforeEach(() => {
      drink = new Drink(50, 'Lemonade', 500);
    });

    it('should set price, name, and volume correctly', () => {
      expect(drink.name).toBe('Lemonade');
      expect(drink.price).toBe(50);
      expect(drink.volume).toBe(500);
    });

    it('should throw an error if volume is zero or negative', () => {
      expect(() => {
        drink.volume = -10;
      }).toThrow('Объем должен быть больше 0 мл');
    });

    it('should throw an error if price is zero or negative', () => {
      expect(() => {
        drink.price = -1;
      }).toThrow('Цена должна быть больше 0 рублей');
    });

    it('should throw an error if name is empty', () => {
      expect(() => {
        drink.name = '';
      }).toThrow('Название не может быть пустым');
    });

    it('should return a correct details output', () => {
      expect(drink.details()).toBe('Volume: 500 мл');
    });

    it('should return correct toString output', () => {
      expect(drink.toString()).toBe('Product: Lemonade, Price: 50 рублей, Volume: 500 мл');
    });
  });

  describe('Dish', () => {
    let dish: Dish;

    beforeEach(() => {
      dish = new Dish(100, 'Pasta', 400);
    });

    it('should set price, name, and calorie correctly', () => {
      expect(dish.name).toBe('Pasta');
      expect(dish.price).toBe(100);
      expect(dish.calorie).toBe(400);
    });

    it('should throw an error if calorie is negative', () => {
      expect(() => {
        dish.calorie = -100;
      }).toThrow('Калорийность не может быть отрицательной');
    });

    it('should throw an error if price is zero or negative', () => {
      expect(() => {
        dish.price = -1;
      }).toThrow('Цена должна быть больше 0 рублей');
    });

    it('should throw an error if name is empty', () => {
      expect(() => {
        dish.name = '';
      }).toThrow('Название не может быть пустым');
    });

    it('should return a correct details output', () => {
      expect(dish.details()).toBe('Calories: 400 ккал');
    });

    it('should return correct toString output', () => {
      expect(dish.toString()).toBe('Product: Pasta, Price: 100 рублей, Calories: 400 ккал');
    });
  });
});
