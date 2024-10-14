function maxSum(root) {
  
  class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
  
  if (root === null) {
        return 0;
    }

  if (root.left === null && root.right === null) {
        return root.value;
    }
  
  let leftSum, rightSum;
  
  if (root.left !== null){
    leftSum = maxSum(root.left);
  }
  else leftSum = Number.NEGATIVE_INFINITY; // это значение работает корректно для функции Math.max
  
  if (root.right !== null){
    rightSum = maxSum(root.right);
  }
  else rightSum = Number.NEGATIVE_INFINITY;
  
  return root.value + Math.max(leftSum, rightSum); 
}
