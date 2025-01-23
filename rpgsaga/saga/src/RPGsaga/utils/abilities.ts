import { Player } from '../Player';

import { Logger } from './Logger';

export interface Ability {
  name: string;
  duration: number; // / Действует в течение скольких раундов
  effect: (target: Player, caster?: Player) => void; // Эффект способности
  affectsAttack: boolean; // Влияет ли на атаку
  usageLimit: number; // Ограничение использования способности за раунд
}

export const abilities: Ability[] = [
  {
    name: 'Frozen Arrows',
    duration: 3, // Эффект длится 3 хода
    effect: (target: Player, caster?: Player) => {
      // if (!caster) return;
      target.activeEffects.push({
        ability: {
          name: 'Frozen Damage',
          duration: 0, // Внутренний эффект для подсчета урона
          effect: (target: Player) => {
            const damage = caster.getStrength() * 0.2;
            target.takeDamage(damage);
            Logger.log(`${target.getName()} takes ${damage.toFixed(2)} additional damage from Frozen Arrows.`);
          },
          affectsAttack: false,
          usageLimit: Infinity,
        },
        remainingTurns: 3,
      });

      target.takeDamage(caster.getStrength() * 0.5);
      Logger.log(
        `${caster.getName()} uses Frozen Arrows on ${target.getName()}, dealing ${caster.getStrength() * 0.5} initial damage.`,
      );
    },
    affectsAttack: true,
    usageLimit: 1, // Базовое ограничение
  },

  {
    name: 'Fire Arrows',
    duration: Infinity, // Действует до конца боя
    effect: (target: Player, caster: Player) => {
      target.activeEffects.push({
        ability: {
          name: 'Fire Arrows',
          duration: 1,
          effect: (target: Player) => {
            Logger.log(`${target.getName()} takes 2 extra damage from Fire Arrows!\n`);
            target.takeDamage(2.0); // Дополнительный урон от огня
          },
          affectsAttack: true,
          usageLimit: Infinity,
        },
        remainingTurns: Infinity, // Длительность баффа в течение боя
      });
      Logger.log(`${caster.getName()} activates Fire Arrows, adding extra damage to attacks!`);
    },
    affectsAttack: true,
    usageLimit: 1,
  },
  {
    name: 'Retribution Strike',
    duration: 0,
    effect: (target: Player, caster: Player) => {
      const extraDamage = Number((caster.getStrength() * 0.3).toFixed(2));
      target.takeDamage(caster.getStrength() + extraDamage);
      Logger.log(
        `${caster.getName()} uses Retribution Strike, dealing ${caster.getStrength()} + ${extraDamage} damage on ${target.getName()}!`,
      );
    },
    affectsAttack: true,
    usageLimit: Infinity,
  },
  {
    name: 'SpellBounding',
    duration: 1,
    effect: (target: Player, caster: Player) => {
      if (target.getClass() === 'Mage') {
        Logger.log(
          `${caster.getName()} is casting SpellBounding on ${target.getName()}, but it doesn't work on mages!`,
        );
      } else {
        target.skipTurn = true;
        Logger.log(
          `${caster.getName()} is casting SpellBounding on ${target.getName()}! Now ${target.getName()} is skipping their next turn.`,
        );
      }
    },
    affectsAttack: false,
    usageLimit: Infinity,
  },
];
