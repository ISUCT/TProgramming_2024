function add(a, b) {
  let result = "";
  let value = 0;
  a = a.split("");
  b = b.split("");

  while (a.length || b.length || value) {
    value += ~~a.pop() + ~~b.pop();
    result = (value % 10) + result;
    value = value > 9;
  }

  return result;
}
