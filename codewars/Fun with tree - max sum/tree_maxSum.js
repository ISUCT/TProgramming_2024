class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function maxSum(root) {
    if (root === null) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    return root.value;
}
    let leftSum = maxSum(root.left);
    let rightSum = maxSum(root.right);
    let maxChildSum = Math.max(leftSum, rightSum);

    return root.value + maxChildSum;
    
}

let root = new TreeNode(17,
    new TreeNode(3,
        new TreeNode(2)
    ),
    new TreeNode(-10,
        new TreeNode(16),
        new TreeNode(1,
            new TreeNode(13)
        )
    )
);
console.log(maxSum(root));