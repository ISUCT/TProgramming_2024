import { Cat } from '../src/ClassRabbit/Cat';
import { Rabbit } from '../src/ClassRabbit/Rabbit';

describe('Animal tests', () => {
  it('should create a Rabbit instance', () => {
    const rabbit = new Rabbit(2, 'Kyle', 'grey', 7);
    expect(rabbit.getAge).toEqual(2);
    expect(rabbit.getName).toEqual('Kyle');
    expect(rabbit.getColor).toEqual('grey');
    expect(rabbit.weight).toEqual(7);
  });

  it('should create a Cat instance', () => {
    const cat = new Cat(5, 'Murzik', 'orange', 'munchkin');
    expect(cat.getAge).toEqual(5);
    expect(cat.getName).toEqual('Murzik');
    expect(cat.getColor).toEqual('orange');
    expect(cat.breed).toEqual('munchkin');
  });

  it('set new age for Rabbit and Cat', () => {
    const rabbit = new Rabbit(2, 'Kyle', 'grey', 7);
    const cat = new Cat(5, 'Murzik', 'orange', 'munchkin');
    rabbit.setAge = 3;
    cat.setAge = 7;

    expect(rabbit.getAge).toEqual(3);
    expect(cat.getAge).toEqual(7);
  });

  it('setting negative value for age of Rabbit and Cat', () => {
    const rabbit = new Rabbit(2, 'Kyle', 'grey', 7);
    const cat = new Cat(5, 'Murzik', 'orange', 'munchkin');

    expect(() => (rabbit.setAge = -1)).toThrow('age cant be below zero');
    expect(() => (cat.setAge = -1)).toThrow('age cant be below zero');
  });

  it('correct "toString" for Rabbit', () => {
    const rabbit = new Rabbit(2, 'Kyle', 'grey', 7);
    expect(rabbit.toString()).toEqual('Rabbit: { age: 2, name: Kyle, color: grey, weight: 7 }');
  });

  it('correct "toString" for Cat', () => {
    const cat = new Cat(5, 'Murzik', 'orange', 'munchkin');
    expect(cat.toString()).toEqual('Cat: { age: 5, name: Murzik, color: orange, breed: munchkin }');
  });

  it('make sound for Rabbit and Cat', () => {
    const rabbit = new Rabbit(2, 'Kyle', 'grey', 7);
    const cat = new Cat(5, 'Murzik', 'orange', 'munchkin');

    expect(() => rabbit.makeSound()).not.toThrow();
    expect(() => cat.makeSound()).not.toThrow();
  });
});
