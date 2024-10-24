function sumPairs(ints, s) {
    if (ints.length < 2) return undefined;
    let seen = new Set();
    for (let i = 0; i < ints.length; i++) {
      let needed = s - ints[i];
      if (seen.has(needed)) {
        return [needed, ints[i]];
      }
      seen.add(ints[i]);
    }
    return undefined;
  }