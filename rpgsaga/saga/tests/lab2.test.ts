import { Kitten } from '../src';

describe('Kitten', () => {
  test('Проверяем конструктор, инициализируем его свойства', () => {
    const Kitten = new Kitten('Marsik', 2, 'The Lop-eared Scotsman');
    expect(Kitten.getName).toBe('Marsik');
    expect(Kitten.getAge).toBe(2);
    expect(Kitten.getBreed).toBe('The Lop-eared Scotsman');
  });

  test('Получаем и устанавливаем имя кошки', () => {
    const Kitten = new Kitten('Marsik', 2, 'The Lop-eared Scotsman');
    Kitten.setName = 'Barsik';
    expect(Kitten.getName).toBe('Barsik');
  });

  test('Получаем и устанавливаем возраст кошки', () => {
    const Kitten = new Kitten('Marsik', 2, 'The Lop-eared Scotsman');
    Kitten.setAge = 5;
    expect(Kitten.getAge).toBe(5);
  });

  test('Придумаем недопустимое значение возраста', () => {
    console.error = jest.fn();
    const Kitten = new Kitten('Marsik', 2, 'The Lop-eared Scotsman');
    try {
      Kitten.setAge = 250; 
    } catch (error) {
      expect(console.error).toHaveBeenCalledWith('The value specified is incorrect for the age!');
    }
    expect(Kitten.getAge).toBe(2);
  });

  test('Получаем и устанавливаем породу кошки', () => {
    const Kitten = new Kitten('Marsik', 2, 'The Lop-eared Scotsman');
    Kitten.setBreed = 'Siamese';
    expect(Kitten.getBreed).toBe('Siamese');
  });

  test('Получаем полные сведения о кошке', () => {
    const Kitten = new Kitten('Marsik', 2, 'The Lop-eared Scotsman');
    expect(Kitten.getInfo).toBe("Kitten's name: Marsik, Kitten's age: 2, Kitten's breed: The Lop-eared Scotsman");
  });

  test('Меняем имя у кошки', () => {
    const Kitten = new Kitten('Marsik', 2, 'The Lop-eared Scotsman');
    Kitten.changeName('Barsik');
    expect(Kitten.getName).toBe('Barsik');
  });

  test('Узнаем откуда родом кошки', () => {
    const cat1 = new Kitten('Marsik', 2, 'The Lop-eared Scotsman');
    const cat2 = new Kitten('Kompot', 1, 'The mutt');
    const cat3 = new Kitten('Simba', 6, 'Siamese');

    expect(cat1.whereFrom()).toBe('Russia');
    expect(cat2.whereFrom()).toBe('Belarus');
    expect(cat3.whereFrom()).toBe("Ooops... I don't know(");
  });
});
