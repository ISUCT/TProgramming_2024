function deepCount(arr) {
    let count = arr.length;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        count += deepCount(arr[i]);
      }
    }
    return count;
  }