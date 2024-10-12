import { solveExpression, solveTaskA, solveTaskB } from "../src/function";

describe("Math function - solveExpression", () => {
  it("Values b = 2.5 and x = 2 should give 0.4044751279034462", () => {
    expect(solveExpression(2.5, 2)).toBe(0.4044751279034462);
  });

  it("Values b = 2.5 and x = -2.5 should throw an exception", () => {
    expect( () => { 
      solveExpression(2.5, -2.5); 
    }).toThrow(new Error("'x' doesn't belong to the function's domain."));
  });
});

describe("Math expression - solveTask", () => {
  it("solveTaskA with default values", () => {
    const expectedValues = [0.41909547079788284, 0.410531553505908, 0.40340060098920905, 0.40270445521311926, 0.41245185299033565, 0.43236073073480347];

    expect(solveTaskA(1.28, 3.28, 0.4)).toStrictEqual(expectedValues);
  })
  
  it("solveTaskB with default values", () => {
    const defaultValues = [1.1, 2.4, 3.6, 1.7, 3.9];
    const expectedValues = [0.4223535918786487, 0.40209894115288336, 0.4499775346075324, 0.41010169477143615, 0.45836602857547504];

    expect(solveTaskB(defaultValues)).toStrictEqual(expectedValues);
  })
})