function add(a, b) {
  
    let result = '';  
    let carry = 0;    
    let i = a.length - 1;  // индекс последней цифры в первом числе
    let j = b.length - 1;  // индекс последней цифры во втором числе

    while (i >= 0 || j >= 0 || carry > 0) {
      
        // Получаем цифры на текущих позициях (если индекс выходит за пределы строки, используем 0)
        const digitA = i >= 0 ? parseInt(a[i], 10) : 0; 
        const digitB = j >= 0 ? parseInt(b[j], 10) : 0;

        let sum = digitA + digitB + carry;

        carry = Math.floor(sum / 10);

        result = (sum % 10) + result;

        i--;
        j--;
    }

    return result;
}