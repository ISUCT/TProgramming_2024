import { random_name } from "../../../src/lab3/fun_random/random_name";

test('random_name should return a valid name', () => {
    const name = random_name();
    expect(typeof name).toBe("string");
});