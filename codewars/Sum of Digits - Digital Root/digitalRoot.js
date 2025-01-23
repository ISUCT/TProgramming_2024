function digitalRoot(n) {
  
    while (n >= 10) {
        let sum = 0;
        let numStr = n.toString();
        

        for (let i = 0; i < numStr.length; i++) {
            sum += Number(numStr[i]);
        }

        n = sum;
    }
    
    return n;
}
