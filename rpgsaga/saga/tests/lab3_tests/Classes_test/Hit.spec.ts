import { Hit } from "../../../src/lab3/Clasees/Class_hit";

test('hit should have correct properties', () => {
    const hit = new Hit(100, "phys", false);
    expect(hit.damage).toBe(100);
    expect(hit.type_damage).toBe("phys");
});