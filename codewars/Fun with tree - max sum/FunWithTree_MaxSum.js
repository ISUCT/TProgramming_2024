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
    function findMaxSum(node) {
        if (node.left === null && node.right === null) {
            return node.value;
        }
        let maxSum = -Infinity;
        if (node.left !== null) {
            maxSum = Math.max(maxSum, findMaxSum(node.left));
        }
        if (node.right !== null) {
            maxSum = Math.max(maxSum, findMaxSum(node.right));
        }
        return node.value + maxSum;
    }
    return findMaxSum(root)
}