import { IAbility } from '../../Ability/Ability';
import { FabricAbility } from '../../Ability/FabricAbility';
import { PlayerFabric } from '../../Characters/FabricCharacter';
import { Game } from '../../Game';
import { Logger } from '../output/Logger';
import { readAnswer } from '../question/readAnswer';

export async function createCharacter(numberOfPlayers: number): Promise<void> {
  const skillFabric = new FabricAbility();
  const logger = new Logger();

  let playerType: string;
  let playerHealth: number = 0;
  let playerStrength: number = 0;

  const playerSkills: IAbility[] = [];
  const playerFabric = new PlayerFabric();
  const types: string[] = ['Knight', 'Archer', 'Wizard'];
  const skillNames: string[] = ['огненные стрелы', 'ледяные стрелы', 'удар возмездия', 'заворожение'];

  async function askForClass(): Promise<void> {
    const playerClass: string = await readAnswer('Выберите класс своего героя: 1. Knight, 2. Archer, 3. Wizard: ');
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
    const healthInput: string = await readAnswer('Напишите количество здоровья для своего героя (от 125 до 150): ');
    const number: number = parseInt(healthInput);
    if (isNaN(number) || number < 125 || number > 150) {
      console.log('Некорректный ввод. Пожалуйста, попробуйте снова.');
      await askForHealth();
    } else {
      playerHealth = number;
      await askForStrength();
    }
  }

  async function askForStrength(): Promise<void> {
    const strengthInput: string = await readAnswer('Напишите количество силы для своего героя (от 10 до 15): ');
    const number: number = parseInt(strengthInput);
    if (isNaN(number) || number < 10 || number > 15) {
      console.log('Некорректный ввод. Пожалуйста, попробуйте снова.');
      await askForStrength();
    } else {
      playerStrength = number;
      await askForWeapon();
    }
  }

  async function askForWeapon(): Promise<void> {
    const playerClass: string = await readAnswer('Выберите оружие своего героя: 1. меч, 2. лук, 3. посох: ');
    const number: number = parseInt(playerClass);
    if (isNaN(number) || number < 1 || number > 3) {
      console.log('Некорректный ввод. Пожалуйста, попробуйте снова.');
      await askForWeapon();
    } else {
      await askForSkills();
    }
  }

  async function askForSkills(): Promise<void> {
    const playerClass: string = await readAnswer(
      'Выберите скиллы своего героя: 1. огненные стрелы, 2. ледяные стрелы, 3. удар возмездия, 4. заворожение. \nДля старта со стандартными навыками класса, напишите 5. Для выхода напишите 6 : ',
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
