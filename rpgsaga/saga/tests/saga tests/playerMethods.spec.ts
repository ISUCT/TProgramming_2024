import { Player } from "../../src/rpg saga/players/playerClass";
import { Warrior } from "../../src/rpg saga/players/warriorClass";
import { Sword } from "../../src/rpg saga/weapons/swordClass";


describe('Player Class', () => {
  let player: Player;

  beforeEach(() => {
    player = new Warrior(true, false, [], [0, 0], 'Mock', 'MockPlayer', 100, new Sword('MockSword','режущий', 10, 0.1), 10, 10, 10);
  });

  it('Should be an instance of Player', () => {
    expect(player).toBeInstanceOf(Player);
  });

  it('Should take damage correctly', () => {
    player.takeDamage(20);
    expect(player['_healthPoints']).toBe(80);
  });

  it('Should apply passive debuff correctly', () => {
    player['getPassiveDebuff'](10, 3);
    expect(player['_debufflist']).toContainEqual([10, 3]);
  });

  it('Should take passive damage correctly', () => {
    player['getPassiveDebuff'](10, 3);
    player.getDamagedByPassive();
    expect(player['_healthPoints']).toBe(90);
  });

  it('Should check live status correctly', () => {
    player.takeDamage(100);
    player.checkLiveStatus();
    expect(player['_alive']).toBe(false);
  });

  it('Should reload cooldown correctly', () => {
    player['_kdlist'] = [2, 3];
    player['reloadCooldown']();
    expect(player['_kdlist']).toEqual([1, 2]);
  });

  it('Should set health correctly', () => {
    player.backHP = 150;
    expect(player['_healthPoints']).toBe(150);
  });

  it('Should return correct round results', () => {
    expect(player.playerRoundResults()).toBe('Персонаж MockPlayer выжил. У него 100 хп');
    player.takeDamage(100);
    player.checkLiveStatus();
    expect(player.playerRoundResults()).toBe('💀Персонаж MockPlayer умер.💀');
  });
});