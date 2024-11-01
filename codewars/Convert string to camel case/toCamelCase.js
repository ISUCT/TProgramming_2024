function toCamelCase(str) {
    a = str.replaceAll('_', '-').split('-');
    res = []
    res.push(a[0]);
    for(i = 1;i < a.length;i++){
      res.push(a[i][0].toUpperCase())
      res.push(a[i].slice(1))
    }
    return res.join("")
  }