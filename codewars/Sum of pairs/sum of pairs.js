function sumPairs(ints, s) {
    checkedNumbers = {};
    for (let i = 0; i < ints.length; i++) {
        let currentNum = ints[i];
        let suggestedNumber = s - currentNum;
        if (checkedNumbers[suggestedNumber] !== undefined) {
            return [suggestedNumber, currentNum];
        }
        checkedNumbers[currentNum] = i;
    }
    return undefined;
  }