function maxSum(root) {
    if (root === null) {
      return 0;
    }
  
    function dfs(node) {
      if (node === null) {
        return Number.NEGATIVE_INFINITY;
      }
  
      if (node.left === null && node.right === null) {
        return node.value;
      }
  
      const leftSum = dfs(node.left);
      const rightSum = dfs(node.right);
  
      return node.value + Math.max(leftSum, rightSum);
    }
  
    return dfs(root);
  }
  
  console.log(
    maxSum(
      new TreeNode(
        5,
        new TreeNode(4, new TreeNode(-80), new TreeNode(-60)),
        new TreeNode(10, new TreeNode(-90))
      )
    )
  );