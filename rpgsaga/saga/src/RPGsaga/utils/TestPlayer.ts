import { Player } from '../Player';
import { Ability, abilities } from './abilities';

export class TestPlayer extends Player {
  activeEffects: any[] = []; // Для хранения активных эффектов, например, от способностей

  constructor(
    name: string,
    health: number,
    strength: number,
    criticalChance: number
  ) {
    super(name, health, strength, criticalChance);
  }

  getName(): string {
    return this.name;
  }

  // Возвращаем набор способностей для теста
  getAbilities(): Ability[] {
    return abilities; // Используем предоставленные способности
  }

  getClass(): string {
    return 'Warrior'; // Пример класса
  }

  // Метод для применения эффекта способности
  applyAbilityEffect(ability: Ability, target: Player) {
    ability.effect(target, this);
  }
}