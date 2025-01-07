import { part1, part2 } from './lab1';
import { Film } from './lab2';

function main() {

const r_a = part1(2.0, 4.1, 0.77, 1.77, 0.2);
const sliceb = [1.24, 1.38, 2.38, 3.21, 0.68];
const r_b = part2(sliceb, 2.0, 4.1);

console.log(r_a);
console.log(r_b);
console.log("Чудов Даниил");
console.log("17");
console.log("Не женат");

const myFilm = new Film("Inception", 148, "Sci-Fi");

myFilm.getInfo(); // Вывод информации о фильме
myFilm.playFilm(); // Проигрывание фильма

myFilm.setDuration(150); // Изменение длительности фильма
myFilm.setGenre("Science Fiction"); // Изменение жанра фильма

myFilm.getInfo(); // Вывод обновленной информации
}
main();