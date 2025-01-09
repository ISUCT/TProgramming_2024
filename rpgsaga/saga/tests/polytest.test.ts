import { Character, Enemy } from '../src/polymorph'; 

describe('Entity', () => {
  describe('Character', () => {
    it('should create a valid Character instance', () => {
      const character = new Character('Алиса', 8, 7, 6, 9);
      expect(character.name).toBe('Алиса');
      expect(character.intellect).toBe(8);
      expect(character.psyche).toBe(7);
      expect(character.physique).toBe(6);
      expect(character.motorics).toBe(9);
    });

    it('should throw an error if intellect is out of range', () => {
      expect(() => new Character('Алиса', 11, 7, 6, 9)).toThrow('Количество очков интеллекта может быть только от 1 до 10.');
    });

    it('should throw an error if psyche is out of range', () => {
      expect(() => new Character('Алиса', 8, 11, 6, 9)).toThrow('Количество очков психики может быть только от 1 до 10.');
    });

    it('should throw an error if physique is out of range', () => {
      expect(() => new Character('Алиса', 8, 7, 11, 9)).toThrow('Количество очков физиологии может быть только от 1 до 10.');
    });

    it('should throw an error if motorics is out of range', () => {
      expect(() => new Character('Алиса', 8, 7, 6, 11)).toThrow('Количество очков моторики может быть только от 1 до 10.');
    });

    it('should print overall info', () => {
      const character = new Character('Алиса', 8, 7, 6, 9);
      const spy = jest.spyOn(console, 'log').mockImplementation();
      character.printOverallInfo();
      expect(spy).toHaveBeenCalledWith(
        `Имя: Алиса\nИнтеллект: 8\nПсихика: 7\nФизиология: 6\nМоторика: 9\n`,
      );
      spy.mockRestore();
    });

    it('should dance', () => {
      const character = new Character('Алиса', 8, 7, 6, 9);
      const spy = jest.spyOn(console, 'log').mockImplementation();
      character.dance();
      expect(spy).toHaveBeenCalledWith('Алиса танцует как в последний раз');
      spy.mockRestore();
    });

    it('should create a default character', () => {
      const character = Character.createDefaultCharacter();
      expect(character.name).toBe('Жан Викмар');
      expect(character.intellect).toBe(5);
      expect(character.psyche).toBe(5);
      expect(character.physique).toBe(5);
      expect(character.motorics).toBe(5);
    });
  });

  describe('Enemy', () => {
    it('should create a valid Enemy instance', () => {
      const enemy = new Enemy('Злодей', 5, 4, 7, 6);
      expect(enemy.name).toBe('Злодей');
      expect(enemy.intellect).toBe(5);
      expect(enemy.psyche).toBe(4);
      expect(enemy.physique).toBe(7);
      expect(enemy.motorics).toBe(6);
    });

    it('should dance', () => {
      const enemy = new Enemy('Злодей', 5, 4, 7, 6);
      const spy = jest.spyOn(console, 'log').mockImplementation();
      enemy.dance();
      expect(spy).toHaveBeenCalledWith('Злодей делает джагу джагу');
      spy.mockRestore();
    });
  });
});


describe('event method', () => {
    it('should pass the event if the sum is enough', () => {
      const character = new Character('Алиса', 10, 10, 10, 10);
      const spy = jest.spyOn(Math, 'random').mockReturnValue(0); 
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  
      character.event();
  
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('Событие пройдено успешно.'),
      );
  
      spy.mockRestore();
      consoleSpy.mockRestore();
    });
  
    it('should fail the event if the sum is not enough', () => {
      const character = new Character('Алиса', 1, 1, 1, 1);
      const spy = jest.spyOn(Math, 'random').mockReturnValue(1);
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  
      character.event();
  
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('Событие провалено.'),
      );
  
      spy.mockRestore();
      consoleSpy.mockRestore();
    });
  });


  describe('toString method', () => {
    it('should return the correct string for Character', () => {
      const character = new Character('Алиса', 8, 7, 6, 9);
      expect(character.toString()).toBe(
        'Персонаж: Алиса, Интеллект: 8, Психика: 7, Физиология: 6, Моторика: 9',
      );
    });
  
    it('should return the correct string for Enemy', () => {
      const enemy = new Enemy('Злодей', 5, 4, 7, 6);
      expect(enemy.toString()).toBe(
        'Враг: Злодей, Интеллект: 5, Психика: 4, Физиология: 7, Моторика: 6',
      );
    });
  });