import exp = require("constants");
import { Staff_Santa_Claus } from "../../../../src/lab3/Clasees/Classes_weapons/Weapons/Staff_Santa_Claus";

test('staff santa claus should have correct properties', () => {
    const staffSantaClaus = new Staff_Santa_Claus();
    expect(staffSantaClaus.name).toBe("Santa Claus`s staff");
    expect(staffSantaClaus.damage).toBe(25);
    expect(staffSantaClaus.type_damage).toBe('magical')
    expect(staffSantaClaus.increase_magic_resist).toBe(0);
    expect(staffSantaClaus.increase_phys_resist).toBe(0);
    expect(staffSantaClaus.multiplier_magic_resist).toBe(1);
    expect(staffSantaClaus.multiplier_phys_resist).toBe(1);
});