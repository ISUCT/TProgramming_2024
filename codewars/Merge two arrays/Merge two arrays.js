function mergeArrays(chars, nums) {
    let merged = [];
    let i = 0;
    let j = 0;
  
    while (i < chars.length || j < nums.length) {
      if (i < chars.length) {
        merged.push(chars[i]);
        i++;
      }
      if (j < nums.length) {
        merged.push(nums[j]);
        j++;
      }
    }
  
    return merged;
  }