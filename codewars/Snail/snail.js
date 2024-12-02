snail = function (array) {
    if (array.length === 0) {
      return [];
    }
    let bottom = 0;
    let top = array.length - 1;
    let left = 0;
    let right = array[0].length - 1;
    let arranged = [];
  
    while (bottom <= top && left <= right) {
      for (let i = left; i <= right; i++) {
        arranged.push(array[bottom][i]);
      }
      bottom++;
  
      for (let i = bottom; i <= top; i++) {
       arranged.push(array[i][right]);
      }
      right--;
  
      if (bottom <= top && left <= right) {
        for (let i = right; i >= left; i--) {
          arranged.push(array[top][i]);
        }
        top--;
  
        for (let i = top; i >= bottom; i--) {
          arranged.push(array[i][left]);
        }
        left++;
      }
    }
  
    return arranged;
  }; 