import {Cat} from '../src';

test('Проверяем конструктор, инициализируем его свойства', () => {
    const cat = new Cat('Marsik', 2, 'The Lop-eared Scotsman');
    expect(cat.getName).toBe('Marsik');
    expect(cat.getAge).toBe(2);
    expect(cat.getBreed).toBe('The Lop-eared Scotsman');
});

test('Получаем и устанавливаем имя кошки', () => {
    const cat = new Cat('Marsik', 2, 'The Lop-eared Scotsman');
    cat.setName = 'Barsik';
    expect(cat.getName).toBe('Barsik');
});

test('Получаем и устанавливаем возраст кошки', () => {
    const cat = new Cat('Marsik', 2, 'The Lop-eared Scotsman');
    cat.setAge = 5;
    expect(cat.getAge).toBe(5);
});

test('Придумаем недопустимое значение возраста', () => {
    console.error = jest.fn();
    const cat = new Cat('Marsik', 2, 'The Lop-eared Scotsman');
    cat.setAge = 250; 
    expect(console.error).toHaveBeenCalledWith("Cats don't live that long!");
    expect(cat.getAge).toBe(2);
});

test('Получаем и устанавливаем породу кошки', () => {
    const cat = new Cat('Marsik', 2, 'The Lop-eared Scotsman');
    cat.setBreed = 'Siamese';
    expect(cat.getBreed).toBe('Siamese');
});

test('Получаем полные сведения о кошке', () => {
    const cat = new Cat('Marsik', 2, 'The Lop-eared Scotsman');
    expect(cat.getInfo).toBe("Cat's name: Marsik, cat's age: 2, cat's breed: The Lop-eared Scotsman");
});

test('Меняем имя у кошки', () => {
    const cat = new Cat('Marsik', 2, 'The Lop-eared Scotsman');
    cat.changeCatName('Barsik');
    expect(cat.getName).toBe('Barsik');
});

test('Узнаем откуда родом кошки', () => {
    const cat1 = new Cat('Marsik', 2, 'The Lop-eared Scotsman');
    const cat2 = new Cat('Kompot', 1, 'The mutt');
    const cat3 = new Cat('Simba', 6, 'Siamese');
    
    expect(cat1.whereFrom()).toBe('Russia');
    expect(cat2.whereFrom()).toBe('Belarus');
    expect(cat3.whereFrom()).toBe("Ooops... I don't know(");
});

