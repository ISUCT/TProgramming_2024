import { Dish } from "../src/lab2";

describe("Dish", () => {
 let dish: Dish;

 beforeEach(() => {
  dish = new Dish("Pizza", 15.99, "Italian");
 });

 it("should create a Dish instance with correct properties", () => {
  expect(dish.name).toBe("Pizza");
  expect(dish.price).toBe(15.99);
  expect(dish.type).toBe("Italian");
 });

 it("should have getter and setter for name", () => {
  expect(dish.getname).toBe("Pizza");

  dish.setname = "Pasta";
  expect(dish.getname).toBe("Pasta");
 });

 it("should have getter and setter for price", () => {
  expect(dish.getprice).toBe(15.99);

  dish.setprice = 20.99;
  expect(dish.getprice).toBe(20.99);

  console.error = jest.fn();
  dish.setprice = -5;
  expect(console.error).toHaveBeenCalledWith("The price cannot be less than zero!");
  expect(dish.getprice).toBe(20.99); 
 });

 it("should have getter and setter for type", () => {
  expect(dish.gettype).toBe("Italian");

  dish.settype = "American";
  expect(dish.gettype).toBe("American");
 });

 it("should return correct info string", () => {
  expect(dish.getinfo).toBe("Dish's name: Pizza, dish's price: 15.99, dish's type: Italian");
 });
});
