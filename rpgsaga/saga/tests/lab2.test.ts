import { Kitten } from "../src/lab1and2/catclass/lab2";

describe('Kitten', () => {
  test('Проверяем конструктор, инициализируем его свойства', () => {
    const kittenInstance = new Kitten('Marsik', 2, 'The Lop-eared Scotsman');
    expect(kittenInstance.getName).toBe('Marsik');
    expect(kittenInstance.getAge).toBe(2);
    expect(kittenInstance.getBreed).toBe('The Lop-eared Scotsman');
  });

  test('Получаем и устанавливаем имя кошки', () => {
    const kittenInstance = new Kitten('Marsik', 2, 'The Lop-eared Scotsman');
    kittenInstance.setName = 'Barsik';
    expect(kittenInstance.getName).toBe('Barsik');
  });

  test('Получаем и устанавливаем возраст кошки', () => {
    const kittenInstance = new Kitten('Marsik', 2, 'The Lop-eared Scotsman');
    kittenInstance.setAge = 5;
    expect(kittenInstance.getAge).toBe(5);
  });

  test('Придумаем недопустимое значение возраста', () => {
    console.error = jest.fn();
    const kittenInstance = new Kitten('Marsik', 2, 'The Lop-eared Scotsman');
    try {
      kittenInstance.setAge = 250; 
    } catch (error) {
      expect(console.error).toHaveBeenCalledWith("Cats don't live that long!");
    }
    expect(kittenInstance.getAge).toBe(2);
  });

  test('Получаем и устанавливаем породу кошки', () => {
    const kittenInstance = new Kitten('Marsik', 2, 'The Lop-eared Scotsman');
    kittenInstance.setBreed = 'Siamese';
    expect(kittenInstance.getBreed).toBe('Siamese');
  });

  test('Получаем полные сведения о кошке', () => {
    const kittenInstance = new Kitten('Marsik', 2, 'The Lop-eared Scotsman');
    expect(kittenInstance.getInfo).toBe("Kitten's name: Marsik, Kitten's age: 2, Kitten's breed: The Lop-eared Scotsman");
  });

  test('Меняем имя у кошки', () => {
    const kittenInstance = new Kitten('Marsik', 2, 'The Lop-eared Scotsman');
    kittenInstance.changeCatName('Barsik');
    expect(kittenInstance.getName).toBe('Barsik');
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