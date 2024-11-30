import { calculateResult, taskA, taskB } from '../src/lab1';

describe('taskA', () => {
  it('должен генерировать корректную последовательность результатов', () => { 
    const inputsliceA = taskA(2.25, 1.2, 2.7, 0.3);
    const resultA = [2.5459011874117747,
        3.735983292638961,
        7.1083728642251875,
        16.855773254008064,
        48.47123187382395,
        165.19243025088485];
        expect(inputsliceA).toEqual(resultA);
  });
});


describe('taskB', () => {
  it('должен корректно обрабатывать массив', () => { 
    const inputsliceB = [2.25, 1.31, 1.39, 1.44, 1.56, 1.92];
    const inputresultB = taskB(inputsliceB, 2.25);
    const resultB = [ 27.948173113392947,
        2.826987894685307,
        3.1368308543347414,
        3.381490901769852,
        4.1692163772210185,
        9.793860042023663];
        expect(inputresultB).toEqual(resultB);
  });
});