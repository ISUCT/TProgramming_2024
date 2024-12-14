import { Film } from '../src/lab2';

describe('Класс Film', () => { 
  let film: Film;

  beforeEach(() => {
    film = new Film('В поисках утраченного времени', 'Марк Дэниел', 120);
  });

  test('должен создавать экземпляр класса Film', () => { 
    expect(film).toBeInstanceOf(Film);
    expect(film.title1).toBe('В поисках утраченного времени');
    expect(film.director2).toBe('Марк Дэниел');
    expect(film.duration3).toBe(120);
  });

  test('метод play должен выводить корректное сообщение', () => { 
    console.log = jest.fn();
    film.play();
    expect(console.log).toHaveBeenCalledWith(
      'Играет фильм "В поисках утраченного времени" режиссера Марк Дэниел. Длительность: 120 минут.'
    );
  });

  test('метод getInfo должен возвращать корректную информацию', () => { 
    const info = film.getInfo();
    expect(info).toBe('Фильм: "В поисках утраченного времени", Режиссер: Марк Дэниел, Длительность: 120 минут.');
  });

  test('метод updateFilmInfo должен обновлять режиссера и длительность', () => { 
    film.updateFilmInfo('Новый Режиссер', 150);
    expect(film.director2).toBe('Новый Режиссер');
    expect(film.duration3).toBe(150);
  });
});