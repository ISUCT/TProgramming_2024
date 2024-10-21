// .reduce((a, b) => a + b, 0)
function digitalRoot(n) {
    if (n>=10){
        let a = n.toString().split('');
        let b = a.map(Number);
        n = b.reduce((a, b) => a + b, 0);
        n = digitalRoot(n);
    }
    return n
  }
