function maxSum(root) {
    if (root === null) {
        return 0;
    }
    if (root.left === null && root.right === null) {
        return root.value;
    }
    let leftSum = -Infinity;
    let rightSum = -Infinity;
    if (root.left) {
        leftSum = maxSum(root.left);
    }
    if (root.right) {
        rightSum = maxSum(root.right);
    }
    return root.value + Math.max(leftSum, rightSum);
  }

