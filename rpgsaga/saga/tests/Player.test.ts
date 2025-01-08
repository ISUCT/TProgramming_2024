
import { Knight, Player } from '../src/services';
import { Ability, SuperDamage } from '../src/services/Ability';

describe('Player', () => {
  let player: Player;

  beforeEach(() => {
    player = new Knight();
  });

  it('should create a player with correct initial parameters', () => {
    expect(player.name).toBeDefined();
    expect(player.health).toBeGreaterThanOrEqual(20);
    expect(player.health).toBeLessThanOrEqual(25);
    expect(player.power).toBeGreaterThanOrEqual(4);
    expect(player.power).toBeLessThanOrEqual(6);
    expect(player.isAlive).toBe(true);
  });

  it('should update health correctly', () => {
    player.health = 50;
    expect(player.health).toBe(50);
    expect(player.isAlive).toBe(true);

    player.health = 0;
    expect(player.health).toBe(0);
    expect(player.isAlive).toBe(false);

    player.health = -10;
    expect(player.health).toBe(-10);
    expect(player.isAlive).toBe(false);
  });

  it('should call attack methods correctly', () => {
    const opponent = new Knight();
    const spyAttack = jest.spyOn(player, 'useSideEffects');
    const spyUseAbility = jest.spyOn(player, 'useAbility');
    // const spyBaseAttack = jest.spyOn(player, '_baseAttack');

    player.attack(opponent);

    expect(spyAttack).toHaveBeenCalled();
    expect(spyUseAbility).toHaveBeenCalledWith(opponent, expect.any(Function));
    // expect(spyBaseAttack).toHaveBeenCalledWith(opponent);
  });

  it('should use abilities correctly', () => {
    const opponent = new Knight();
    const spyCanUseAbility = jest.spyOn(Ability.prototype, 'canUseAbility').mockReturnValueOnce(true);
    const spyActivate = jest.spyOn(SuperDamage.prototype, 'activate');

    player.useAbility(opponent, () => {});

    expect(spyCanUseAbility).toHaveBeenCalled();
    expect(spyActivate).toHaveBeenCalledWith(opponent, expect.any(Function));
  });

  it('should reset player to initial state', () => {
    player.health = 50;
    player.resetToInitial();

    expect(player.health).toBeGreaterThanOrEqual(20);
    expect(player.health).toBeLessThanOrEqual(25);
  });
});
