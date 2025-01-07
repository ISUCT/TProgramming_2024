import { Film } from "../src/lab2";



describe('Film Class Tests', () => {
    let film: Film;

    beforeEach(() => {
        // Создаем новый объект Film перед каждым тестом
        film = new Film("Inception", 148, "Sci-Fi");
    });

    // Тест конструктора
    test('should correctly initialize Film object', () => {
        expect(film.getTitle()).toBe("Inception");
        expect(film.getDuration()).toBe(148);
        expect(film.getGenre()).toBe("Sci-Fi");
    });

    // Тест метода playFilm
    test('should play the film and log the correct message', () => {
        const consoleSpy = jest.spyOn(console, 'log'); // Следим за вызовом console.log
        film.playFilm();
        expect(consoleSpy).toHaveBeenCalledWith("Now playing: Inception (Sci-Fi)");
    });

    // Тест метода getInfo
    test('should display correct film information', () => {
        const consoleSpy = jest.spyOn(console, 'log'); // Следим за вызовом console.log
        film.getInfo();
        expect(consoleSpy).toHaveBeenCalledWith("\nTitle: Inception");
        expect(consoleSpy).toHaveBeenCalledWith("Duration: 148 minutes");
        expect(consoleSpy).toHaveBeenCalledWith("Genre: Sci-Fi");
    });

    // Тест метода setDuration
    test('should set the duration correctly', () => {
        film.setDuration(150);
        expect(film.getDuration()).toBe(150);
    });

    // Тест метода setDuration с отрицательным значением
    test('should throw an error when setting negative duration', () => {
        expect(() => {
            film.setDuration(-10);
        }).toThrow('Duration must be a positive number');
    });

    // Тест метода setTitle
    test('should set the title correctly', () => {
        film.setTitle("Interstellar");
        expect(film.getTitle()).toBe("Interstellar");
    });

    // Тест метода setGenre
    test('should set the genre correctly', () => {
        film.setGenre("Science Fiction");
        expect(film.getGenre()).toBe("Science Fiction");
    });
});