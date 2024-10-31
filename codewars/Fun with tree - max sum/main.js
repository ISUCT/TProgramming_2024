function maxSum(root) {
    if (!root) return 0;

    if (!root.left && !root.right) return root.value;

    let leftMax = -Infinity;
    let rightMax = -Infinity;

    if (root.left) leftMax = maxSum(root.left);
    if (root.right) rightMax = maxSum(root.right);

    return root.value + Math.max(leftMax, rightMax);
}

