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