import { WeaponFabric } from '../../src/game/fabrics/weaponsFabric/WeaponFabric';

describe('WeaponFabric', () => {
  const weaponFabric = new WeaponFabric();

  it('should create a sword', () => {
    const weapon = weaponFabric.createWeapon('sword', 'Dragonsbane', 10);
    expect(weapon.name).toBe('Dragonsbane');
    expect(weapon.damage).toBe(10);
  });

  it('should create a stick', () => {
    const weapon = weaponFabric.createWeapon('stick', 'Oak Staff', 5);
    expect(weapon.name).toBe('Oak Staff');
    expect(weapon.damage).toBe(5);
  });

  it('should create a bow', () => {
    const weapon = weaponFabric.createWeapon('bow', 'Longbow', 8);
    expect(weapon.name).toBe('Longbow');
    expect(weapon.damage).toBe(8);
  });

  it('should create fists as default', () => {
    const weapon = weaponFabric.createWeapon('invalidType', 'invalidName', 0);
    expect(weapon.name).toBe('fists');
    expect(weapon.damage).toBe(3);
  });

  it('should create a random sword', () => {
    const weapon = weaponFabric.createRandomWeapon('sword');
    expect(weapon.name).toBeDefined();
    expect(weapon.damage).toBeGreaterThanOrEqual(2);
    expect(weapon.damage).toBeLessThanOrEqual(10);
    expect(['Dragonsbane', 'Stormbringer', 'Aethelred']).toContain(weapon.name);
  });

  it('should create a random stick', () => {
    const weapon = weaponFabric.createRandomWeapon('stick');
    expect(weapon.name).toBeDefined();
    expect(weapon.damage).toBeGreaterThanOrEqual(2);
    expect(weapon.damage).toBeLessThanOrEqual(10);
    expect(['Oak Staff', 'Elderwood Branch', "Shepherd's Crook"]).toContain(weapon.name);
  });

  it('should create a random bow', () => {
    const weapon = weaponFabric.createRandomWeapon('bow');
    expect(weapon.name).toBeDefined();
    expect(weapon.damage).toBeGreaterThanOrEqual(2);
    expect(weapon.damage).toBeLessThanOrEqual(10);
    expect(["Hunter's Bow", 'Longbow', 'Shortbow']).toContain(weapon.name);
  });

  it('should handle invalid weapon type in createRandomWeapon', () => {
    const weapon = weaponFabric.createRandomWeapon('invalidType');
    expect(weapon.name).toBe('fists');
    expect(weapon.damage).toBe(3);
  });
});
