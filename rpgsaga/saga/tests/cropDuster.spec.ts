import { CropDuster } from '../src/difplanes/cropDuster';

describe('CropDuster class funcs tests', () => {
  it('Constructor test', () => {
    let newCropDust = new CropDuster(190, "An-2", "Russia", "Anton", 90000);
    expect(newCropDust.speed).toEqual(190);
    expect(newCropDust.model).toBe("An-2");
    expect(newCropDust.manufCountry).toBe("Russia");
    expect(newCropDust.owner).toBe("Anton");
    expect(newCropDust.value).toEqual(90000);
  });

  describe('Get funcs tests', () => {
    let newCropDust = new CropDuster(190, "An-2", "Russia", "Anton", 90000);
    it('Speed get test', () => {
      expect(newCropDust.speed).toEqual(190);
    });
    it('Model get test', () => {
      expect(newCropDust.model).toBe("An-2");
    });
    it('ManufacturingCountry get test', () => {
      expect(newCropDust.manufCountry).toBe("Russia");
    });
    it('Owner get test', () => {
      expect(newCropDust.owner).toBe("Anton");
    });
    it('Value get test', () => {
      expect(newCropDust.value).toEqual(90000);
    });
  });

  describe('Set funcs tests', () => {
    let newCropDust = new CropDuster(190, "An-2", "Russia", "Anton", 90000);

    it('Speed valid test', () => {
      newCropDust.speed = 100;
      expect(newCropDust.speed).toEqual(100);
    });

    it('Speed negative test', () => {
      expect(() => { newCropDust.speed = -1}).toThrow(Error(`Invalid speed: -1. Speed must be between 1 and 9999.`));
    });
    
    it('Speed too large test', () => {
      expect(() => { newCropDust.speed = 999999999999}).toThrow(Error(`Invalid speed: 999999999999. Speed must be between 1 and 9999.`));
    });

    it('ManufacturingCountry valid test', () => {
      newCropDust.manufCountry = "Kazakhstan";
      expect(newCropDust.manufCountry).toBe("Kazakhstan");
    });

    it('ManufacturingCountry invalid test', () => {
      expect(() => { newCropDust.manufCountry = ""}).toThrow(Error("Manufacturing country cannot be empty."));
    });

    it('Model valid test', () => {
      newCropDust.model = "An-3";
      expect(newCropDust.model).toBe("An-3");
    });

    it('Model invalid test', () => {
      expect(() => { newCropDust.model = ""}).toThrow(Error("Model name cannot be empty."));
    });

    it('Value valid test', () => {
      newCropDust.value = 50000;
      expect(newCropDust.value).toEqual(50000);
    });

    it('Value negative test', () => {
      expect(() => { newCropDust.value = -1}).toThrow(Error("CropDusters can't be this value"));
    });
    
    it('Value too large test', () => {
      expect(() => { newCropDust.value = 999999999999}).toThrow(Error("CropDusters can't be this value"));
    });

    it('Owner valid test', () => {
      newCropDust.owner = "Oleg";
      expect(newCropDust.owner).toBe("Oleg");
    });

    it('Owner invalid test', () => {
      expect(() => { newCropDust.owner = ""}).toThrow(Error("There can't be no owner"));
    });
  });

    describe('Other funcs tests', () => {
      let newCropDust = new CropDuster(190, "An-2", "Russia", "Anton", 90000);
    it('Should return model, speed and manufCountry', () => {
      expect(newCropDust.toString()).toEqual(`${newCropDust.model} ${newCropDust.manufCountry}`);
    });
    it('Should return speed as number', () => {
      expect(newCropDust.toNumber()).toEqual(newCropDust.speed);
    });
    it('Should return all of the properties', () => {
      expect(newCropDust.description()).toEqual(
        `Model: ${newCropDust.model} \n Speed: ${newCropDust.speed} \n ManufacturingCountry: ${newCropDust.manufCountry} \n Owner: ${newCropDust.owner} \n Value: ${newCropDust.value}`,
      );
    });
    it('Should return interesting fact', () => {
      expect(newCropDust.feature()).toEqual(`${newCropDust.model} of this handsome ${newCropDust.owner} is best for agriculture`);
    });
  });
});
