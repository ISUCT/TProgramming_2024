function maxSum(root) {
    if (root === null) {
        return 0;
    } else if (root.left === null) {
        return root.value + maxSum(root.right);
    } else if (root.right === null) {
        return root.value + maxSum(root.left);
    } else {
        return root.value + Math.max(maxSum(root.left), maxSum(root.right));
    }
}

