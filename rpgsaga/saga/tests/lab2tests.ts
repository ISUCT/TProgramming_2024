import { Mouse } from '../src';

describe('Mouse', () => {
  it('should correctly initialize properties in the constructor', () => {
    const Mouse = new Mouse('Jerry', 1, 'White Mouse', 'White');
    expect(mouse.getName).toBe('Jerry');
    expect(mouse.getAge).toBe(1);
    expect(mouse.getBreed).toBe('White Mouse');
    expect(mouse.getColor).toBe('White');
  });

  it('Должен корректно устанавливать и получать имя мыши', () => {
    const mouse = new Mouse('Jerry', 1, 'White Mouse', 'White');
    mouse.setName = 'Tom';
    expect(mouse.getName).toBe('Tom');
  });

  it('Должен вывести ошибку, если указан неверный возраст', () => {
    const mouse = new Mouse('Jerry', 1, 'White Mouse', 'White');
    console.error = jest.fn();
    mouse.setAge = 10;
    expect(console.error).toHaveBeenCalledWith("Mice can't live that long");
    expect(mouse.getAge).toBe(1);

    mouse.setAge = -1;
    expect(console.error).toHaveBeenCalledWith("Mice can't live that long");
    expect(mouse.getAge).toBe(1);
  });

  it('Должен корректно устанавливать и получать возраст мыши', () => {
    const mouse = new Mouse('Jerry', 1, 'White Mouse', 'White');
    mouse.setAge = 2;
    expect(mouse.getAge).toBe(2);
  });


  it('Должен корректно устанавливать и получать породу мыши', () => {
    const mouse = new Mouse('Jerry', 1, 'White Mouse', 'White');
    mouse.setBreed = 'Black Mouse';
    expect(mouse.getBreed).toBe('Black Mouse');
  });

  it('Должен корректно устанавливать и получать цвет мыши', () => {
    const mouse = new Mouse('Jerry', 1, 'White Mouse', 'White');
    mouse.setColor = 'Gray';
    expect(mouse.getColor).toBe('Gray');
  });

  it('Должен получать полную информацию о мыши', () => {
    const mouse = new Mouse('Jerry', 1, 'White Mouse', 'White');
    expect(mouse.getInfo).toBe("Мышонка зовут Джерри, возраст мышонка: 1 год, порода мышонка: Белый мышонок, окрас мышонка: Белый");
  });

  it('Должен корректно изменять имя мыши', () => {
    const mouse = new Mouse('Jerry', 1, 'White Mouse', 'White');
    mouse.changeMouseName('Tom');
    expect(mouse.getName).toBe('Tom');
  });

  it('Должен корректно определять происхождение мыши', () => {
    const mouse1 = new Mouse('Mickey', 2, 'White Mouse', 'White');
    const mouse2 = new Mouse('Jerry', 1, 'White Mouse', 'White');
    const mouse3 = new Mouse('Minnie', 6, 'White Mouse', 'White');

    expect(mouse1.whereFrom()).toBe("Disneyland");
    expect(mouse2.whereFrom()).toBe("Cartoon");
    expect(mouse3.whereFrom()).toBe("sorryyy(");
  });
});
