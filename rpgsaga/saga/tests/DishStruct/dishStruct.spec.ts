import { Dish } from "../../src/DishStruct/DishStruct";

describe('Dish class', () => {
  let dish: Dish;

  beforeEach(() => {
    dish = new Dish(10, 250, 'Pasta');
  });

  test('should create a Dish instance with valid properties', () => {
    expect(dish.price).toBe(10);
    expect(dish.calorie).toBe(250);
    expect(dish.name).toBe('Pasta');
  });

  test('should set price correctly', () => {
    dish.price = 15;
    expect(dish.price).toBe(15);
  });

  test('should throw an error if price is negative', () => {
    expect(() => {
      dish.price = -5;
    }).toThrow('Price so low');
  });

  test('should throw an error if price is zero', () => {
    expect(() => {
      dish.price = 0;
    }).toThrow('Price so low');
  });

  test('should set calorie correctly', () => {
    dish.calorie = 300;
    expect(dish.calorie).toBe(300);
  });

  test('should set name correctly', () => {
    dish.name = 'Pizza';
    expect(dish.name).toBe('Pizza');
  });

  test('should not throw an error when calorie is set to a positive number', () => {
    expect(() => {
      dish.calorie = 500;
    }).not.toThrow();
    expect(dish.calorie).toBe(500);
  });

  test('should not throw an error when name is set to a non-empty string', () => {
    expect(() => {
      dish.name = 'Salad';
    }).not.toThrow();
    expect(dish.name).toBe('Salad');
  });

  test('should allow setting very large price', () => {
    dish.price = 100000;
    expect(dish.price).toBe(100000);
  });

  test('should allow setting very large calorie value', () => {
    dish.calorie = 10000;
    expect(dish.calorie).toBe(10000);
  });

  test('should allow setting very long dish name', () => {
    const longName = 'A very long dish name that exceeds typical length for a dish';
    dish.name = longName;
    expect(dish.name).toBe(longName);
  });

  test('should return correct properties after multiple updates', () => {
    dish.price = 20;
    dish.calorie = 450;
    dish.name = 'Burger';
    expect(dish.price).toBe(20);
    expect(dish.calorie).toBe(450);
    expect(dish.name).toBe('Burger');
  });

  test('should handle multiple instances with different values', () => {
    const dish1 = new Dish(15, 300, 'Steak');
    const dish2 = new Dish(25, 500, 'Sushi');
    expect(dish1.price).toBe(15);
    expect(dish1.calorie).toBe(300);
    expect(dish1.name).toBe('Steak');
    expect(dish2.price).toBe(25);
    expect(dish2.calorie).toBe(500);
    expect(dish2.name).toBe('Sushi');
  });

  test('should handle price update without affecting other properties', () => {
    const initialPrice = dish.price;
    dish.price = 20;
    expect(dish.price).toBe(20);
    expect(dish.calorie).toBe(250);
    expect(dish.name).toBe('Pasta');
    expect(dish.price).not.toBe(initialPrice);
  });

  test('should handle calorie update without affecting other properties', () => {
    const initialCalorie = dish.calorie;
    dish.calorie = 350;
    expect(dish.calorie).toBe(350);
    expect(dish.price).toBe(10);
    expect(dish.name).toBe('Pasta');
    expect(dish.calorie).not.toBe(initialCalorie);
  });

  test('should handle name update without affecting other properties', () => {
    const initialName = dish.name;
    dish.name = 'Soup';
    expect(dish.name).toBe('Soup');
    expect(dish.price).toBe(10);
    expect(dish.calorie).toBe(250);
    expect(dish.name).not.toBe(initialName);
  });

  test('should handle setting very low price gracefully', () => {
    expect(() => {
      dish.price = -0.01; // Very small negative value
    }).toThrow('Price so low');
  });

  test('should allow calorie to be zero or any positive value', () => {
    dish.calorie = 0;
    expect(dish.calorie).toBe(0);
    dish.calorie = 1000;
    expect(dish.calorie).toBe(1000);
  });
});

