import { WizardFactory } from '../../src/Character/Factories/WizardFactory';
import { Wizard } from '../../src/Character/Classes/wizard';

describe('WizardFactory tests', () => {
  let wizardFactory: WizardFactory;

  beforeEach(() => {
    wizardFactory = new WizardFactory();
  });

  it('Should create an wizard with default abilities', () => {
    const newWizard = wizardFactory.createWizard(['Alice', 'Bob'], 100, 20);
    expect(newWizard).toBeInstanceOf(Wizard);
    expect(newWizard.getHealth).toBe(100);
    expect(newWizard.getStrength).toBe(20);
    expect(newWizard.getAbilities.length).toBe(2);
  });

  it('Should select a random name from the provided names array', () => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const newWizard1 = wizardFactory.createWizard(names, 100, 20);
    const newWizard2 = wizardFactory.createWizard(names, 100, 20);
    expect(names.includes(newWizard1.getName)).toBe(true);
    expect(names.includes(newWizard2.getName)).toBe(true);
  });
});
