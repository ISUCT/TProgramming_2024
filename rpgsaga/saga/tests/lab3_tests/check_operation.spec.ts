import { check_operation } from "../../src/lab3/Utils/check_operation";

test('check_operation should return true or false based on chance', () => {
    const result = check_operation(50);
    expect([true, false]).toContain(result);
});