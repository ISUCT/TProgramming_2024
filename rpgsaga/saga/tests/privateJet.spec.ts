import { PrivateJet } from '../src/difplanes/privateJet';

describe('PrivateJet class funcs tests', () => {
  it('Constructor test', () => {
    let newPriJet = new PrivateJet(985, "Gulfstream G650ER", "USA", "Elon Musk", 50000000);
    expect(newPriJet.speed).toEqual(985);
    expect(newPriJet.model).toBe("Gulfstream G650ER");
    expect(newPriJet.manufCountry).toBe("USA");
    expect(newPriJet.owner).toBe("Elon Musk");
    expect(newPriJet.value).toEqual(50000000);
  });

  describe('Get funcs tests', () => {
    let newPriJet = new PrivateJet(985, "Gulfstream G650ER", "USA", "Elon Musk", 50000000);
    it('Speed get test', () => {
      expect(newPriJet.speed).toEqual(985);
    });
    it('Model get test', () => {
      expect(newPriJet.model).toBe("Gulfstream G650ER");
    });
    it('ManufacturingCountry get test', () => {
      expect(newPriJet.manufCountry).toBe("USA");
    });
    it('Owner get test', () => {
      expect(newPriJet.owner).toBe("Elon Musk");
    });
    it('Value get test', () => {
      expect(newPriJet.value).toEqual(50000000);
    });
  });

  describe('Set funcs tests', () => {
    let newPriJet = new PrivateJet(985, "Gulfstream G650ER", "USA", "Elon Musk", 50000000);

    it('Speed valid test', () => {
      newPriJet.speed = 100;
      expect(newPriJet.speed).toEqual(100);
    });

    it('Speed negative test', () => {
      expect(() => { newPriJet.speed = -1}).toThrow(Error(`Invalid speed: -1. Speed must be between 1 and 9999.`));
    });
    
    it('Speed too large test', () => {
      expect(() => { newPriJet.speed = 999999999999}).toThrow(Error(`Invalid speed: 999999999999. Speed must be between 1 and 9999.`));
    });

    it('ManufacturingCountry valid test', () => {
      newPriJet.manufCountry = "Katar";
      expect(newPriJet.manufCountry).toBe("Katar");
    });

    it('ManufacturingCountry invalid test', () => {
      expect(() => { newPriJet.manufCountry = ""}).toThrow(Error("Manufacturing country cannot be empty."));
    });

    it('Model valid test', () => {
      newPriJet.model = "Gulfstream G550";
      expect(newPriJet.model).toBe("Gulfstream G550");
    });

    it('Model invalid test', () => {
      expect(() => { newPriJet.model = ""}).toThrow(Error("Model name cannot be empty."));
    });

    it('Value valid test', () => {
      newPriJet.value = 10000000;
      expect(newPriJet.value).toEqual(10000000);
    });

    it('Value negative test', () => {
      expect(() => { newPriJet.value = -1}).toThrow(Error("PrivateJets can't be this value"));
    });
    
    it('Value too large test', () => {
      expect(() => { newPriJet.value = 999999999999}).toThrow(Error("PrivateJets can't be this value"));
    });

    it('Owner valid test', () => {
      newPriJet.owner = "Jeff Bezos";
      expect(newPriJet.owner).toBe("Jeff Bezos");
    });

    it('Owner invalid test', () => {
      expect(() => { newPriJet.owner = ""}).toThrow(Error("There can't be no owner"));
    });
  });

    describe('Other funcs tests', () => {
      let newPriJet = new PrivateJet(985, "Gulfstream G650ER", "USA", "Elon Musk", 50000000);
    it('Should return model, speed and manufCountry', () => {
      expect(newPriJet.toString()).toEqual(`${newPriJet.model} ${newPriJet.manufCountry}`);
    });
    it('Should return speed as number', () => {
      expect(newPriJet.toNumber()).toEqual(newPriJet.speed);
    });
    it('Should return all of the properties', () => {
      expect(newPriJet.description()).toEqual(
        `Model: ${newPriJet.model} \n Speed: ${newPriJet.speed} \n ManufacturingCountry: ${newPriJet.manufCountry} \n Owner: ${newPriJet.owner} \n Value: ${newPriJet.value}`,
      );
    });
    it('Should return interesting fact', () => {
      expect(newPriJet.feature()).toEqual(`${newPriJet.model}, owned by ${newPriJet.owner} is a great time saver`);
    });
  });
});
