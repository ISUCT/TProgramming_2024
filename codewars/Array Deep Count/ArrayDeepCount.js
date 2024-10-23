function deepCount(a) {
    return a.reduce((sum, element) => {
      return sum + 1 + (Array.isArray(element) ? deepCount(element) : 0);
    }, 0);
  }