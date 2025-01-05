import { PlayerFabric } from '../../src/game/fabrics/playersFabrics';
import { Player } from '../../src/game/abstract/Player';
import { IWeapon } from '../../src/game/weapon/IWeapon';
import { ISkill } from '../../src/game/skills/ISkill';
import { ArcherFabric } from '../../src/game/fabrics/playersFabrics/ArcherFabric';
import { KnightFabric } from '../../src/game/fabrics/playersFabrics/KnightFabric';
import { WizardFabric } from '../../src/game/fabrics/playersFabrics/WizardFabric';

class MockWeapon {
  name: string;
  typeOfDamage: string;
  damage: number;
  constructor(name: string, typeOfDamage: string, damage: number) {
    this.name = name;
    this.typeOfDamage = typeOfDamage;
    this.damage = damage;
  }
}

class MockArcherFabric extends ArcherFabric {
  createArcher(
    names: string[],
    playerHealth: number,
    playerStrength: number,
    playerWeapon: IWeapon,
    playerSkills: ISkill[] | null = null,
  ): Player {
    return new MockPlayer('Archer', playerHealth, playerStrength, playerWeapon, playerSkills);
  }
}

class MockKnightFabric extends KnightFabric {
  createKnight(
    names: string[],
    playerHealth: number,
    playerStrength: number,
    playerWeapon: IWeapon,
    playerSkills: ISkill[] | null = null,
  ): Player {
    return new MockPlayer('Knight', playerHealth, playerStrength, playerWeapon, playerSkills);
  }
}

class MockWizardFabric extends WizardFabric {
  createWizard(
    names: string[],
    playerHealth: number,
    playerStrength: number,
    playerWeapon: IWeapon,
    playerSkills: ISkill[] | null = null,
  ): Player {
    return new MockPlayer('Wizard', playerHealth, playerStrength, playerWeapon, playerSkills);
  }
}

class MockPlayer extends Player {
  constructor(className: string, health: number, strength: number, weapon: IWeapon, skills: ISkill[] | null = null) {
    super(health, strength, '', weapon, skills!);
    this._className = className;
  }
}

class MockWeaponFabric {
  createRandomWeapon(type: string, damageType: string): MockWeapon {
    return new MockWeapon(type, damageType, 10);
  }
}

describe('PlayerFabric tests', () => {
  let playerFabric: PlayerFabric;
  let mockWeaponFabric: MockWeaponFabric;
  let mockArcherFabric: MockArcherFabric;
  let mockKnightFabric: MockKnightFabric;
  let mockWizardFabric: MockWizardFabric;

  beforeEach(() => {
    mockWeaponFabric = new MockWeaponFabric();
    mockArcherFabric = new MockArcherFabric();
    mockKnightFabric = new MockKnightFabric();
    mockWizardFabric = new MockWizardFabric();
    playerFabric = new PlayerFabric();
    (playerFabric as any).weaponFabric = mockWeaponFabric;
    (playerFabric as any).archerFabric = mockArcherFabric;
    (playerFabric as any).knightFabric = mockKnightFabric;
    (playerFabric as any).wizardFabric = mockWizardFabric;
  });

  it('Should create a Knight', () => {
    const player = playerFabric.createPlayer('Knight', 100, 20, new MockWeapon('Mock Weapon', 'Mock Type', 10));
    expect(player).toBeInstanceOf(Player);
    expect(player?.className).toBe('Knight');
  });

  it('Should create an Archer', () => {
    const player = playerFabric.createPlayer('Archer', 100, 20, new MockWeapon('Mock Weapon', 'Mock Type', 10));
    expect(player).toBeInstanceOf(Player);
    expect(player?.className).toBe('Archer');
  });

  it('Should create a Wizard', () => {
    const player = playerFabric.createPlayer('Wizard', 100, 20, new MockWeapon('Mock Weapon', 'Mock Type', 10));
    expect(player).toBeInstanceOf(Player);
    expect(player?.className).toBe('Wizard');
  });

  it('Should return undefined for an invalid class', () => {
    const player = playerFabric.createPlayer('InvalidClass', 100, 20, new MockWeapon('Mock Weapon', 'Mock Type', 10));
    expect(player).toBeUndefined();
  });

  it('Should create a random player', () => {
    const player = playerFabric.createRandomPlayer();
    expect(player).toBeInstanceOf(Player);
    expect(['Knight', 'Archer', 'Wizard']).toContain(player.className);
  });

  it('Should create random players', () => {
    const players = playerFabric.createRandomPlayers(3);
    expect(players.length).toBe(3);
    players.forEach(player => expect(['Knight', 'Archer', 'Wizard']).toContain(player.className));
  });
});
