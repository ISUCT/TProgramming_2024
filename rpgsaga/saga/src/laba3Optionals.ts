import { Player } from './laba3CreatingPlayer';
import { Logs } from './laba3Logs';
import { HeroGeneration } from './laba3HeroFactory';
import { Mage } from './classes/laba3Mage';
import { Knight } from './classes/laba3Knight';
import { Archer } from './classes/laba3Archer';

export class Optional {
  private logs: Logs = new Logs();

  // Массивы имен для каждого класса
  private knightNames = ['Гигачадус', 'Данила', 'Даниил', 'Данил', 'Метрофан', 'Рубака', 'Sans', 'Олегадруг'];
  private MageNames = ['Погорелый', 'Пришибленый', 'Магнус', 'Зевс', 'Добби', 'Йеннифер', 'Волшебник'];
  private archerNames = ['Робин', 'Бобин', 'Толик', 'Болик', 'Тетева', 'Олег'];

  // Метод для создания игроков вручную
  public async createPlayersManually(
    numberOfPlayers: number,
    askQuestion: (question: string) => Promise<string>,
  ): Promise<Player[]> {
    const players: Player[] = [];
    for (let i = 0; i < numberOfPlayers; i++) {
      const player = await this.createPlayerManually(askQuestion);
      if (player) {
        players.push(player);
      } else {
        // Если пользователь отказался от создания игрока, заполняем оставшиеся места случайными игроками
        const remainingPlayers = numberOfPlayers - players.length;
        const randomPlayers = this.createRandomPlayers(remainingPlayers);
        players.push(...randomPlayers);
        break;
      }
    }
    return players;
  }

  // Метод для создания одного игрока вручную
  private async createPlayerManually(
    askQuestion: (question: string) => Promise<string>,
  ): Promise<Player | null> {
    const name = await askQuestion('Введите имя игрока: ');
    if (!name) return null;
  
    const classChoice = await askQuestion('Выберите класс (1 - Knight, 2 - Mage, 3 - Archer): ');
    let playerClass: string;
    switch (classChoice) {
      case '1':
        playerClass = 'Knight';
        break;
      case '2':
        playerClass = 'Mage';
        break;
      case '3':
        playerClass = 'Archer';
        break;
      default:
        this.logs.log('Неверный выбор класса. Игрок будет создан случайным образом.');
        return null;
    }
  
    let strengthInput = await askQuestion('Введите силу игрока: ');
    let strength = parseInt(strengthInput, 10);
    if (isNaN(strength)) {
      this.logs.log('Некорректное значение силы. Установлено значение по умолчанию.');
      strength = this.getDefaultStrength(playerClass);
    }
  
    let healthInput = await askQuestion('Введите здоровье игрока: ');
    let health = parseInt(healthInput, 10);
    if (isNaN(health)) {
      this.logs.log('Некорректное значение здоровья. Установлено значение по умолчанию.');
      health = this.getDefaultHealth(playerClass);
    }
  
    // Проверка и корректировка значений силы и здоровья
    switch (playerClass) {
      case 'Knight':
        strength = Math.max(20, Math.min(100, strength));
        health = Math.max(80, Math.min(200, health));
        break;
      case 'Mage':
        strength = Math.max(10, Math.min(50, strength));
        health = Math.max(50, Math.min(150, health));
        break;
      case 'Archer':
        strength = Math.max(15, Math.min(70, strength));
        health = Math.max(60, Math.min(180, health));
        break;
    }
  
    const player = HeroGeneration.Herocreate(playerClass, name, strength, health);
  
    const abilities = player.getAbilities();
    if (abilities.length > 0) {
      const abilityChoice = await askQuestion(`Выберите способность (${abilities.join(', ')}): `);
      if (abilities.includes(abilityChoice)) {
        player.setSelectedAbility(abilityChoice);
      } else {
        this.logs.log('Неверный выбор способности. Способность будет выбрана случайным образом.');
        player.setSelectedAbility(abilities[Math.floor(Math.random() * abilities.length)]);
      }
    }
  
    return player;
  }

  private getDefaultStrength(playerClass: string): number {
    switch (playerClass) {
      case 'Knight':
        return 60; // Среднее значение для рыцаря
      case 'Mage':
        return 30; // Среднее значение для мага
      case 'Archer':
        return 40; // Среднее значение для лучника
      default:
        return 50; // Значение по умолчанию
    }
  }

  private getDefaultHealth(playerClass: string): number {
    switch (playerClass) {
      case 'Knight':
        return 140; // Среднее значение для рыцаря
      case 'Mage':
        return 100; // Среднее значение для мага
      case 'Archer':
        return 120; // Среднее значение для лучника
      default:
        return 100; // Значение по умолчанию
    }
  }

  // Метод для создания случайных игроков
  public createRandomPlayers(numberOfPlayers: number): Player[] {
    const players: Player[] = [];
    const existingNames = new Set<string>(); // Для уникальности имен
  
    for (let i = 0; i < numberOfPlayers; i++) {
      const playerType = Math.floor(Math.random() * 3); // Случайный тип игрока
      let name: string;
      let player: Player;
  
      // Выбираем случайное имя в зависимости от типа игрока
      switch (playerType) {
        case 0: // Knight
          name = this.generateUniqueName(this.knightNames, existingNames);
          player = new Knight(name, Math.max(20, Math.min(100, Math.floor(Math.random() * 50) + 1)), Math.max(80, Math.min(200, Math.floor(Math.random() * 100) + 50)));
          break;
        case 1: // Mage
          name = this.generateUniqueName(this.MageNames, existingNames);
          player = new Mage(name, Math.max(10, Math.min(50, Math.floor(Math.random() * 50) + 1)), Math.max(50, Math.min(150, Math.floor(Math.random() * 100) + 50)));
          break;
        case 2: // Archer
          name = this.generateUniqueName(this.archerNames, existingNames);
          player = new Archer(name, Math.max(15, Math.min(70, Math.floor(Math.random() * 50) + 1)), Math.max(60, Math.min(180, Math.floor(Math.random() * 100) + 50)));
          break;
        default:
          throw new Error('Неизвестный тип персонажа');
      }
  
      // Выбираем случайную способность для персонажа, если они есть
      const abilities = player.getAbilities();
      if (abilities.length > 0) {
        const selectedAbility = abilities[Math.floor(Math.random() * abilities.length)];
        player.setSelectedAbility(selectedAbility);
      }
  
      players.push(player);
    }
  
    return players;
  }

  // Генерация уникального имени
  private generateUniqueName(baseNames: string[], existingNames: Set<string>): string {
    let name = baseNames[Math.floor(Math.random() * baseNames.length)]; // Выбираем случайное имя
    let uniqueName = name;
    let index = 1;

    // Если имя уже существует, добавляем индекс
    while (existingNames.has(uniqueName)) {
      uniqueName = `${name}${index}`;
      index++;
    }

    // Добавляем новое имя в список существующих
    existingNames.add(uniqueName);
    return uniqueName;
  }
}