function permutations(str) {
    if (str.length === 0) {
      return [];
    }
    if (str.length === 1) {
      return [str];
    }
    const uniquePerm = new Set();
    function genPerm(cur, remain) {
      if (remain.length === 0) {
        uniquePerm.add(cur);
        return;
      }
      for (let i = 0; i < remain.length; i++) {
        const newCur = cur + remain[i];
        const newRemain = remain.slice(0, i) + remain.slice(i + 1);
        genPerm(newCur, newRemain);
      }
    }
    genPerm("", str);
    return Array.from(uniquePerm);
  }