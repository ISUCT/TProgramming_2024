function productFib(prod){
    let curNumber = 1;
    let prevNumber = 0;
    let temp = 0;
    while (curNumber * prevNumber <= prod) {
        temp = curNumber;
        curNumber += prevNumber;
        prevNumber = temp;
        if (curNumber * prevNumber == prod) {
            return [prevNumber, curNumber, true]
        }
    }
    return [prevNumber, curNumber, false];
  }