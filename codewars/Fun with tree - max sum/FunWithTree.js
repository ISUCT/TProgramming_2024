function maxSum(root) {
    if (root === null) {
        return 0;
    }
    function rec(node) {
        if (node === null) {
            return -Infinity;
        }
        if (node.left === null && node.right === null) {
            return node.value;
        }
        const leftMaxSum = rec(node.left);
        const rightMaxSum = rec(node.right);
        return node.value + Math.max(leftMaxSum, rightMaxSum);
    }
    return rec(root);
}
