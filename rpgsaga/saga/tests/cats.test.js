import {Cat} from '../src';

test('Проверяем конструктор, инициализируем его свойства', () => {
    const cat = new Cat('Marsik', 2, 'The Lop-eared Scotsman');
    expect(cat.getname).toBe('Marsik');
    expect(cat.getage).toBe(2);
    expect(cat.getbreed).toBe('The Lop-eared Scotsman');
});

test('получаем и устанавливаем имя кошки', () => {
    const cat = new Cat('Marsik', 2, 'The Lop-eared Scotsman');
    cat.setname = 'Barsik';
    expect(cat.getname).toBe('Barsik');
});

test('получаем и устанавливаем возраст кошки', () => {
    const cat = new Cat('Marsik', 2, 'The Lop-eared Scotsman');
    cat.setage = 5;
    expect(cat.getage).toBe(5);
});

test('придумаем недопустимое значение возраста', () => {
    console.error = jest.fn();
    const cat = new Cat('Marsik', 2, 'The Lop-eared Scotsman');
    cat.setage = 250; 
    expect(console.error).toHaveBeenCalledWith("Cats don't live that long!");
    expect(cat.getage).toBe(2);
});

test('получаем и устанавливаем породу кошки', () => {
    const cat = new Cat('Marsik', 2, 'The Lop-eared Scotsman');
    cat.setbreed = 'Siamese';
    expect(cat.getbreed).toBe('Siamese');
});

test('получаем полные сведения о кошке', () => {
    const cat = new Cat('Marsik', 2, 'The Lop-eared Scotsman');
    expect(cat.getinfo).toBe("Cat's name: Marsik, cat's age: 2, cat's breed: The Lop-eared Scotsman");
});

test('меняем имя у кошки', () => {
    const cat = new Cat('Marsik', 2, 'The Lop-eared Scotsman');
    cat.changecatname('Barsik');
    expect(cat.getname).toBe('Barsik');
});

test('узнаем откуда родом кошки', () => {
    const cat1 = new Cat('Marsik', 2, 'The Lop-eared Scotsman');
    const cat2 = new Cat('Kompot', 1, 'The mutt');
    const cat3 = new Cat('Simba', 6, 'Siamese');
    
    expect(cat1.wherefrom()).toBe('Russia');
    expect(cat2.wherefrom()).toBe('Belarus');
    expect(cat3.wherefrom()).toBe("Ooops... I don't know(");
});
