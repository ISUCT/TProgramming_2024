import { IAbility } from '../../Ability/Ability';
import { FactoryAbility } from '../../Ability/FactoryAbility';
import { FactoryCharacter } from '../../Characters/FactoryCharacter';
import { Game } from '../../Game';
import { Logger } from '../output/Logger';
import { readAnswer } from './readAnswer';

export async function createCharacter(numberOfPlayers: number): Promise<void> {
  const skillFabric = new FactoryAbility();
  const logger = new Logger();

  let playerType: string;
  let playerHealth: number;
  let playerStrength: number;

  const playerSkills: IAbility[] = [];
  const playerFabric = new FactoryCharacter();
  const types: string[] = ['Knight', 'Archer', 'Mage'];
  const skillNames: string[] = ['огненные стрелы', 'ледяные стрелы', 'удар возмездия', 'заворожение'];

  async function askForClass(): Promise<void> {
    const playerClass: string = await readAnswer('\nВыберите класс своего героя: 1. Knight, 2. Archer, 3. Mage: ');
    const number: number = parseInt(playerClass);
    if (isNaN(number) || number < 1 || number > 3) {
      console.log('Некорректный ввод. Пожалуйста, попробуйте снова.');
      await askForClass();
    } else {
      playerType = types[number - 1];
      await askForHealth();
    }
  }

  async function askForHealth(): Promise<void> {
    const healthInput: string = await readAnswer('\nНапишите количество здоровья для своего героя (от 100 до 150): ');
    const number: number = parseInt(healthInput);
    if (isNaN(number) || number < 100 || number > 150) {
      console.log('Некорректный ввод. Пожалуйста, попробуйте снова.');
      await askForHealth();
    } else {
      playerHealth = number;
      await askForStrength();
    }
  }

  async function askForStrength(): Promise<void> {
    const strengthInput: string = await readAnswer('\nНапишите количество силы для своего героя (от 10 до 15): ');
    const number: number = parseInt(strengthInput);
    if (isNaN(number) || number < 10 || number > 15) {
      console.log('Некорректный ввод. Пожалуйста, попробуйте снова.');
      await askForStrength();
    } else {
      playerStrength = number;
      await askForSkills();
    }
  }

  async function askForSkills(): Promise<void> {
    const playerClass: string = await readAnswer(
      '\nВыберите скиллы своего героя: 1. огненные стрелы, 2. ледяные стрелы, 3. удар возмездия, 4. заворожение. \nДля старта со стандартными навыками класса, напишите 5. Для выхода напишите 6 : ',
    );
    const number: number = parseInt(playerClass);
    if (isNaN(number) || number < 1 || number > 6) {
      console.log('Некорректный ввод. Пожалуйста, попробуйте снова.');
      await askForSkills();
    } else if (number < 5 && number > 0) {
      if (playerSkills.length > 2) {
        console.log('У вас уже максимальное количество скиллов');
      } else {
        playerSkills.push(skillFabric.createSkillFromTemplate(skillNames[number - 1])!);
      }
      await askForSkills();
    } else if (number === 6) {
      if (playerSkills.length > 0) {
        return;
      } else {
        console.log('Выберите хотя бы один скилл');
        await askForSkills();
      }
    } else {
      return;
    }
  }

  await askForClass();

  if (playerSkills.length !== 0) {
    const game = new Game(
      numberOfPlayers - 1,
      playerFabric.createPlayer(playerType!, playerHealth, playerStrength, playerSkills),
      logger,
    );
    await game.start();
  } else {
    const game = new Game(
      numberOfPlayers - 1,
      playerFabric.createPlayer(playerType!, playerHealth, playerStrength),
      logger,
    );
    await game.start();
  }
}
