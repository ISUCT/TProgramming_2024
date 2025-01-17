import { Skill } from './skill';
import { StatusEffect } from './statusEffect';

export const ArcherSkills: Skill[] = [
  new Skill('Огненные стрелы', 2, (user, target) => {
    target.addStatusEffect(new StatusEffect('Горение', 2, damageTic => damageTic.receiveDamage(5)));
    return `${user.characterName} использовал Огенные стрелы. ${target.characterName} будет получать по 5 урона 2 хода.`;
  }),
  new Skill('Ледяные стрелы', 1, (user, target) => {
    target.addStatusEffect(new StatusEffect('Обморожение', 3, damageTic => damageTic.receiveDamage(10)));
    return `${user.characterName} использовал Ледяные стрелы. ${target.characterName} будет получать по 10 урона 3 хода.`;
  }),
];

export const SorcererSkills: Skill[] = [
  new Skill('Огненные стрелы', 1, (user, target) => {
    target.addStatusEffect(new StatusEffect('Горение', 2, damageTic => damageTic.receiveDamage(5)));
    return `${user.characterName} использовал Огенные стрелы. ${target.characterName} будет получать по 5 урона 2 хода.`;
  }),
  new Skill('Ледяные стрелы', 3, (user, target) => {
    target.addStatusEffect(new StatusEffect('Обморожение', 3, damageTic => damageTic.receiveDamage(10)));
    return `${user.characterName} использовал Ледяные стрелы. ${target.characterName} будет получать по 10 урона 3 хода.`;
  }),
];

export const WarriorSkills: Skill[] = [
  new Skill('Мастерство', 5, (user, target) => {
    target.receiveDamage(user.damage + 10);
    return `${user.characterName} нанёс по ${target.characterName} Мастерский удар с уроном ${user.damage + 10}.`;
  }),
  new Skill('Мастерство', 5, (user, target) => {
    target.receiveDamage(user.damage + 10);
    return `${user.characterName} нанёс по ${target.characterName} Мастерский удар с уроном ${user.damage + 10}.`;
  }),
];
