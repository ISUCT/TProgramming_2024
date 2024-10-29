import { Film } from '../src/labs/film';

describe('Constructor tests', () => {
  let film: Film;
  beforeEach(() => {
    film = new Film('Inception', 'Christopher Nolan', 2010, 'USA', 'Sci-Fi', 12, 148);
  });
  it('Should create a film with correct properties', () => {
    expect(film.name).toBe('Inception');
    expect(film.director).toBe('Christopher Nolan');
    expect(film.year).toBe(2010);
    expect(film.country).toBe('USA');
    expect(film.genre).toBe('Sci-Fi');
    expect(film.ageLimit).toBe(12);
    expect(film.filmLengthInMinutes).toBe(148);
  });
  it("Should throw Error if film's year less then 1895", () => {
    expect(() => {
      film['year'] = 1000;
    }).toThrow('Incorrect year');
  });
  it("Should throw Error if film's length in minutes <= 0", () => {
    expect(() => {
      film['filmLengthInMinutes'] = -1;
    }).toThrow(`Incorrect film's length`);
  });
  it("Should throw Error if film's length in minutes > 1000", () => {
    expect(() => {
      film['filmLengthInMinutes'] = 1001;
    }).toThrow(`Incorrect film's length`);
  });
  it('should set age limit correctly', () => {
    film.ageLimit = 16;
    expect(film['_ageLimit']).toBe(16);
  });

  it('should throw an error for invalid age limit', () => {
    expect(() => {
      film.ageLimit = 15;
    }).toThrow('Wrong age limit');
  });
});

describe('Film methods tests', () => {
  let film: Film;
  beforeEach(() => {
    film = new Film('Inception', 'Christopher Nolan', 2010, 'USA', 'Sci-Fi', 12, 148);
  });
  it('should return the correct age of the film', () => {
    const old: number = new Date().getFullYear() - Number(film.year);
    expect(film.howOldFilmIs()).toBe(
      `=================== Film "Inception" was released ${old} years ago. ===================`,
    );
  });
  it('Should return the correct film info', () => {
    const expectedInfo = `┏${'—'.repeat(110)}┓\n|Film "Inception" was shot by Christopher Nolan in USA in 2010. Genre of this film is Sci-Fi. This film is 12+.|\n┗${'—'.repeat(110)}┛`;
    expect(film.filmInfo()).toBe(expectedInfo);
  });
  it('Should log start and end messages', async () => {
    jest.useFakeTimers();
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    const playingPromise = film.playFilm();
    expect(consoleLogSpy).toHaveBeenCalledWith(`=================== Film "Inception" started. ===================`);
    jest.advanceTimersByTime(149 * 100);
    await playingPromise;
    expect(consoleLogSpy).toHaveBeenCalledWith(`=================== Film "Inception" ended. ===================`);
    consoleLogSpy.mockRestore();
    jest.useRealTimers();
  });
});
