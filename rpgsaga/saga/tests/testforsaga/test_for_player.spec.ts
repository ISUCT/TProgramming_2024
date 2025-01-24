import { Player } from '../../src/laba3CreatingPlayer';
import { Logs } from '../../src/laba3Logs';

describe('Player Class', () => {
  let player: Player;
  let logs: Logs;

  beforeEach(() => {
    player = new Player('TestPlayer', 10, 100);
    logs = new Logs();
  });

  it('should reduce health by exact amount when taking damage', () => {
    player.takeDamage(30);
    expect(player.getHealth()).toBe(70);
  });

  it('should round damage values before subtracting', () => {
    player.takeDamage(30.6);
    expect(player.getHealth()).toBe(69); // 100 - 30.6 = 69.4 → округляется до 69
  });

  it('should mark player as dead when health reaches zero', () => {
    player.takeDamage(100);
    expect(player.getIsDead()).toBe(true);
  });
});