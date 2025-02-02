import { IAbility } from '../../Ability/Ability';
import { FactoryAbility } from '../../Ability/FactoryAbility';
import { FactoryCharacter } from '../../Characters/FactoryCharacter';
import { Game } from '../../Game';
import { Logger } from '../output/Logger';

import { readAnswer } from './readAnswer';

export async function createCharacter(numberOfCharacters: number): Promise<void> {
  const abilityFactory = new FactoryAbility();
  const logger = new Logger();

  let characterType: string;
  let characterHealth: number;
  let characterStrength: number;

  const characterAbilitys: IAbility[] = [];
  const characterFactory = new FactoryCharacter();
  const types: string[] = ['Knight', 'Archer', 'Mage'];
  const abilityNames: string[] = ['огненные стрелы', 'ледяные стрелы', 'удар возмездия', 'заворожение'];

  async function askForClass(): Promise<void> {
    const characterClass: string = await readAnswer('\nВыберите класс своего героя: 1. Knight, 2. Archer, 3. Mage: ');
    const number: number = parseInt(characterClass);
    if (isNaN(number) || number < 1 || number > 3) {
      console.log('Некорректный ввод. Пожалуйста, попробуйте снова.');
      await askForClass();
    } else {
      characterType = types[number - 1];
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
      characterHealth = number;
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
      characterStrength = number;
      await askForAbilitys();
    }
  }

  async function askForAbilitys(): Promise<void> {
    const characterClass: string = await readAnswer(
      '\nВыберите скиллы своего героя: 1. огненные стрелы, 2. ледяные стрелы, 3. удар возмездия, 4. заворожение. \nДля старта со стандартными навыками класса, напишите 5. Для выхода напишите 6 : ',
    );
    const number: number = parseInt(characterClass);
    if (isNaN(number) || number < 1 || number > 6) {
      console.log('Некорректный ввод. Пожалуйста, попробуйте снова.');
      await askForAbilitys();
    } else if (number < 5 && number > 0) {
      if (characterAbilitys.length > 2) {
        console.log('У вас уже максимальное количество скиллов');
      } else {
        characterAbilitys.push(abilityFactory.createAbilityFromTemplate(abilityNames[number - 1])!);
      }
      await askForAbilitys();
    } else if (number === 6) {
      if (characterAbilitys.length > 0) {
        return;
      } else {
        console.log('Выберите хотя бы один скилл');
        await askForAbilitys();
      }
    } else {
      return;
    }
  }

  await askForClass();

  if (characterAbilitys.length !== 0) {
    const game = new Game(
      numberOfCharacters - 1,
      characterFactory.createCharacter(characterType!, characterHealth, characterStrength, characterAbilitys),
      logger,
    );
    await game.start();
  } else {
    const game = new Game(
      numberOfCharacters - 1,
      characterFactory.createCharacter(characterType!, characterHealth, characterStrength),
      logger,
    );
    await game.start();
  }
}
