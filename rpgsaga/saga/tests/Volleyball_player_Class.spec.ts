import { Volleyball_Player } from "../src/Lab2/Volleyball_player_Class";

describe("Volleyball_Player constructor  tests", () => {
    let person: Volleyball_Player;
    beforeEach(() => {
        person = new Volleyball_Player("Ivan", 19, 'm', 181, 70, "Setter", 295, 320, "ISUCT");
    });
    it("Should create a person with correct properties", () => {
        expect(person.name).toBe("Ivan");
        expect(person.age).toBe(19);
        expect(person.gender).toBe("m");
        expect(person.height).toBe(181);
        expect(person.weight).toBe(70);
        expect(person.position).toBe("Setter");
        expect(person.place_jumping).toBe(295);
        expect(person.running_jumping).toBe(320);
        expect(person.team).toBe("ISUCT");        
    })
    it ("Should throw Error if person's age < 0 or > 110", () => {
        expect(() => {
            person['age'] = -1;
        }).toThrow(`Incorrect age`);
        expect(() => {
            person['age'] = 1000;
        }).toThrow(`Incorrect age`);
    });
    it ("Should throw Error if person's gender != 'm', 'w', 'man' or 'woman'", () => {
        expect(() => {
            person['gender'] = "human";
        }).toThrow(`Incorrect gender`);
    });
    it ("Should throw Error if person's place_jumping < height", () => {
        expect(() => {
            person['place_jumping'] = 169;
        }).toThrow(`Incorrect place_jumping`);
    });
    it ("Should throw Error if person's running_jumping < height", () => {
        expect(() => {
            person['running_jumping'] = 179;
        }).toThrow(`Incorrect running_jumping`);
    });
});

describe("Volleyball_Player methods tests", () => {
    let person: Volleyball_Player;
    beforeEach(() => {
        person = new Volleyball_Player("Ivan", 19, 'm', 181, 70, "Setter", 295, 320, "ISUCT");
    });
    it('Should return the correct info about person', () => {
        expect(person.view_player_parameters()).toBe(`Player ${person.name}:\n
        Takeoff from a standing jump: ${person.place_jumping - person.height}\n
        Takeoff on a running jump: ${person.running_jumping - person.height}`)
    });
});