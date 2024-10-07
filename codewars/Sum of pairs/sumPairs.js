function sumPairs(ints, s) {
  let seen = {};
  for (let i = 0; i < ints.length; i++) {
    let complement = s - ints[i];
    if (complement in seen) {
      return [complement, ints[i]];
    }
    seen[ints[i]] = i;
  }
  return undefined;
}
