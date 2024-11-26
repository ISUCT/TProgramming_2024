import { Furniture } from "../src/Furniture";
import { solution, taskA, taskB } from "../src/lab_1";
import { Table } from "../src/Table";
import { Wardrobe } from "../src/Wardrobe";


describe('Testing functions from 1 laboratory work', () => {
    it('should return 97.14 for solution(0.03, 0.02, 0.13)', () => {
        const res = solution(0.03, 0.02, 0.13)
        expect(res).toBeCloseTo(97.14, 2);
    })
    it('should return Infinity for solution(0, 0, 0)', () => {
        const res = solution(0, 0, 0);
        expect(res).toBe(Infinity);
    });
    it('should return an array of results for valid inputs', () => {
        const res = taskA(0.03, 0.02, 0, 0.1, 0.01);
        expect(res).toHaveLength(11);
        expect(res[0]).toBeCloseTo(solution(0.03, 0.02, 0), 2);
        expect(res[1]).toBeCloseTo(solution(0.03, 0.02, 0.01), 2);
    });
    it('should return an empty array when x_start is greater than x_end', () => {
        const res = taskA(0.03, 0.02, 1, 0, 0.1);
        expect(res).toEqual([]);
    });
    it('should return an empty array when x_start equals x_end', () => {
        const res = taskA(0.03, 0.02, 0.1, 0.1, 0.01);
        expect(res).toEqual([]);
    });
    it('should return an empty array when input list is empty', () => {
        const res = taskB(0.03, 0.02, []);
        expect(res).toEqual([]);
    });
    it('should handle negative values in the input list', () => {
        const input = [-0.01, -0.02, -0.03];
        const res = taskB(0.03, 0.02, input);
        expect(res).toHaveLength(input.length);
        expect(res[0]).toBeCloseTo(solution(0.03, 0.02, -0.01), 2);
        expect(res[1]).toBeCloseTo(solution(0.03, 0.02, -0.02), 2);
        expect(res[2]).toBeCloseTo(solution(0.03, 0.02, -0.03), 2);
    });
    it('should return NaN for large input values', () => {
        const input = [100, 200, 300];
        const res = taskB(0.03, 0.02, input);
        expect(res).toHaveLength(input.length);
        expect(res[0]).toBeNaN();
    });
})


describe('Table class (2 laboratory work)', () => {
    let table = new Table(120, 80, 75, 'wood', 50);

      it('should create a table with correct properties', () => {
        expect(table.length).toBe(120);
        expect(table.width).toBe(80);
        expect(table.height).toBe(75);
        expect(table.material).toBe('wood');
        expect(table.weight).toBe(50);
      });
      it('should throw error for incorrect length', () => {
        expect(() => {
          table.length = 50;
        }).toThrow('Incorrect length value');
        expect(() => {
          table.length = 600; 
        }).toThrow('Incorrect length value');
      });
      it('should throw error for incorrect width', () => {
        expect(() => {
          table.width = 30; 
        }).toThrow('Incorrect width value');
        expect(() => {
          table.width = 400; 
        }).toThrow('Incorrect width value');
      });
      it('should throw error for incorrect height', () => {
        expect(() => {
          table.height = 10; 
        }).toThrow('Incorrect height value');
        expect(() => {
          table.height = 150; 
        }).toThrow('Incorrect height value');
      });
      it('should throw error for incorrect material', () => {
        expect(() => {
          table.material = 'fabric'; 
        }).toThrow('Incorrect material');
      });
      it('should throw error for incorrect weight', () => {
        expect(() => {
          table.weight = 20; 
        }).toThrow('Incorrect weight value');
        expect(() => {
          table.weight = 250;
        }).toThrow('Incorrect weight value');
      });
    it('should return correct purpose', () => {
        const expectedPurpose = 'A table is a versatile piece of furniture used for various functions, including:\n' +
          'Activity Surface: Provides a flat area for dining, working, and playing games.\n' +
          'Social Gathering: Facilitates interactions during meals and discussions.\n' +
          'Storage: Often includes drawers or shelves for organizing items.\n' +
          'Display: Showcases decorative items or plants.\n' +
          'Support: Holds computers and equipment in offices.';
        expect(table.purpose()).toBe(expectedPurpose);
    });
    it('should return correct toString', () => {
        expect(table.toString()).toBe('Length: 120, Width: 80, Height: 75, Material: wood, Weight: 50');
    });
    it('should calculate approximate cost correctly', () => {
        const expectedCost = 'The approximate cost of this table is 2925 rubles'; 
        expect(table.approximateСost()).toBe(expectedCost);
    });
});
    

describe('Wardrobe class (3 laboratory work)', () => {
    let wardrobe = new Wardrobe(50, 80, 200, 'wood', 70);
  
    it('should create a wardrobe with correct properties', () => {
        expect(wardrobe.length).toBe(50);
        expect(wardrobe.width).toBe(80);
        expect(wardrobe.height).toBe(200);
        expect(wardrobe.material).toBe('wood');
        expect(wardrobe.weight).toBe(70);
    });
  it('should throw error for incorrect length', () => {
    expect(() => {
      wardrobe.length = 20; 
    }).toThrow('Incorrect length value');
    expect(() => {
      wardrobe.length = 80; 
    }).toThrow('Incorrect length value');
  });
  it('should throw error for incorrect width', () => {
    expect(() => {
      wardrobe.width = 50; 
    }).toThrow('Incorrect width value');
    expect(() => {
      wardrobe.width = 130; 
    }).toThrow('Incorrect width value');
  });
  it('should throw error for incorrect height', () => {
    expect(() => {
      wardrobe.height = 170; 
    }).toThrow('Incorrect height value');
    expect(() => {
      wardrobe.height = 310; 
    }).toThrow('Incorrect height value');
  });
  it('should throw error for incorrect material', () => {
    expect(() => {
      wardrobe.material = 'glass'; 
    }).toThrow('Incorrect material');
  });
  it('should throw error for incorrect weight', () => {
    expect(() => {
      wardrobe.weight = 30; 
    }).toThrow('Incorrect weight value');
    expect(() => {
      wardrobe.weight = 150; 
    }).toThrow('Incorrect weight value');
  });
  it('should return correct purpose', () => {
    const expectedPurpose = 'A wardrobe is a vital piece of furniture used for:\n' +
      'Clothing Storage: Provides space to hang and store clothes.\n' +
      'Organization: Helps keep garments organized and accessible.\n' +
      'Accessory Display: Often includes shelves for shoes, bags, and other accessories.\n' +
      'Room Aesthetics: Enhances the decor of a room with its design.';
    expect(wardrobe.purpose()).toBe(expectedPurpose);
  });
  it('should return correct toString', () => {
        expect(wardrobe.toString()).toBe('Length: 50, Width: 80, Height: 200, Material: wood, Weight: 70');
    });
  it('should calculate approximate cost correctly', () => {
    const expectedCost = 'The approximate cost of this wardrobe is 4725 rubles'; 
    expect(wardrobe.approximateСost()).toBe(expectedCost);
  });
});

describe('list of classes (3 laboratory work)', () => {
    it('should return the correct methods for each element in list', () => {
        const table = new Table(100, 50, 60, 'wood', 67);
        const wardrobe = new Wardrobe(60, 69, 200, 'metal', 67);
        const furniture: Furniture[] = [table, wardrobe];
        let answers: String[] = [];
        for (const el of furniture) {
            answers.push(el.purpose());
        }
        expect(answers[0]).toBe('A table is a versatile piece of furniture used for various functions, including:\nActivity Surface: Provides a flat area for dining, working, and playing games.\nSocial Gathering: Facilitates interactions during meals and discussions.\nStorage: Often includes drawers or shelves for organizing items.\nDisplay: Showcases decorative items or plants.\nSupport: Holds computers and equipment in offices.');
        expect(answers[1]).toBe('A wardrobe is a vital piece of furniture used for:\nClothing Storage: Provides space to hang and store clothes.\nOrganization: Helps keep garments organized and accessible.\nAccessory Display: Often includes shelves for shoes, bags, and other accessories.\nRoom Aesthetics: Enhances the decor of a room with its design.');
    });
});

