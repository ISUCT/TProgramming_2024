import { Picture } from '../labs/picture';

describe('Picture constructor tests', () => {
  let picture: Picture;
  beforeEach(() => {
    picture = new Picture(
      'Mona Lisa',
      'Leonardo da Vinci',
      1518,
      'Italy',
      'The Renaissance',
      'https://avatars.mds.yandex.net/get-entity_search/2028178/494640495/S600xU_2x',
    );
  });
  it('Should create a picture with correct properties', () => {
    expect(picture.name).toBe('Mona Lisa');
    expect(picture.director).toBe('Leonardo da Vinci');
    expect(picture.year).toBe(1518);
    expect(picture.country).toBe('Italy');
    expect(picture.style).toBe('The Renaissance');
    expect(picture.url).toBe('https://avatars.mds.yandex.net/get-entity_search/2028178/494640495/S600xU_2x');
  });
});

describe('Picture method tests', () => {
  let picture: Picture;
  beforeEach(() => {
    picture = new Picture(
      'Mona Lisa',
      'Leonardo da Vinci',
      1518,
      'Italy',
      'The Renaissance',
      'https://avatars.mds.yandex.net/get-entity_search/2028178/494640495/S600xU_2x',
    );
  });
  it('Should log a message with URL', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    picture.display();
    expect(consoleLogSpy).toHaveBeenCalledWith(`URL to "Mona Lisa" is '${picture.url}'`);
  });
});
