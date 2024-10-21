function maxSum(root) {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return root.value;
    let sumOfLeftBranch = -Infinity;
    let sumOfRightBranch = -Infinity;
    if (root.left) {
        sumOfLeftBranch = maxSum(root.left);
    }
    if (root.right) {
        sumOfRightBranch = maxSum(root.right);
    }
    return root.value + Math.max(sumOfLeftBranch,sumOfRightBranch);
  }
