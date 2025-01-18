function maxSum(root) {
    let left = -Infinity
    let right = -Infinity
    if (root === null){
      return 0
    }
    if (root.left === null && root.right === null ){
      return root.value
    }
    if (root.left){
      left = maxSum(root.left)
    }
    if (root.right){
      right = maxSum(root.right)
    }
    return root.value+Math.max(left,right)
  }