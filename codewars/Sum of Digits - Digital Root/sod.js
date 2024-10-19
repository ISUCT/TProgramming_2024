function digitalRoot(n) {
    n = String(n);
    while (n.length > 1) {
      let num = 0;
      for (let i = 0; i < n.length; i++) {
        num += Number(n[i]);
      }
      n = String(num);
    }
    return Number(n);
  }