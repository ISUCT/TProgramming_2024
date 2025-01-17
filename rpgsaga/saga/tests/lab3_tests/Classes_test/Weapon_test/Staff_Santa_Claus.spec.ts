import { Staff_Santa_Claus } from "../../../../src/lab3/Clasees/Classes_weapons/Weapons/Staff_Santa_Claus";

test('staff santa claus should have correct properties', () => {
    const staffSantaClaus = new Staff_Santa_Claus();
    expect(staffSantaClaus.name).toBe("Santa Claus`s staff");
    expect(staffSantaClaus.damage).toBe(25);
});