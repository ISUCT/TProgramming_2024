function digitalRoot (n) {
    if (n < 10) {
      return n;
    } else {
      let sum = 0;
      while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
      }
      return digitalRoot (sum);
    }
  }