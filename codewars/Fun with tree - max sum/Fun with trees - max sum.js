function maxSum(root) {
  if(root == null) {
    return 0;
  }
  
  return checkTheTree(root);
}

function checkTheTree(node) {
  if(node.left == null && node.right == null) {
    return node.value;
  }
  
  let finSum = 0;
  
  if(node.left != null && node.right == null) {
    finSum = checkTheTree(node.left);
  }
  else if(node.right != null && node.left == null) {
    finSum = checkTheTree(node.right);
  }
  else {
    let sum1 = checkTheTree(node.left);
    let sum2 = checkTheTree(node.right);
    
    finSum = Math.max(sum1, sum2);
  }
  
  return finSum + node.value;
}