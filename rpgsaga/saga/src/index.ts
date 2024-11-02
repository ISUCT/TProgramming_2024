import { taskA, taskB } from './lab1';
import { Phone } from './lab2';
import { SmartPhone } from './lab3';

console.log('Зубков Данила | 2/280 | 6 Вариант');

console.log('Лабораторная работа с мат. функциями');
console.log('Ответы для задачи A:');
console.log(taskA(0.2, 2.2, 0.4));
console.log('Ответы для задачи B:');
console.log(taskB([0.1, 0.9, 1.2, 1.5, 2.3]));

console.log('Лабораторная работа с классами: телефон');
try {
    const phone = new Phone('123-456-789', 'Apple', 'iPhone 15', 75);
    console.log(`The phone number is ${phone.number}`);
    console.log(`The model is ${phone.model}`);
    phone.model = 'iPhone 12';
    console.log(`The model is set to ${phone.model}`);
    phone.call('098-765-533');
    phone.call('098-765-534');
} catch (err) {
    console.error(`Error creating phone: ${err.message}`);
}

console.log('Лабораторная работа с классами и супер классами: устройство, телефон и смартфон');
try {
    const phone = new SmartPhone('Samsung', 'Galaxy S21', 80);
    console.log(`The phone brand is ${phone.brand}`);
    console.log(`The model is ${phone.model}`);
} catch (err) {
    console.error(`Error creating phone: ${err.message}`);
}