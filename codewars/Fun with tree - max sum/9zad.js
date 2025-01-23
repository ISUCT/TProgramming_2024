function havefunwithtree(root) {
    if (root === null) {
        return 0;
    }

    if (root.left === null && root.right === null) {
        return root.value;
    }

    const leftSum = root.left ? havefunwithtree(root.left) : -Infinity;
    const rightSum = root.right ? havefunwithtree(root.right) : -Infinity;

    return root.value + Math.max(leftSum, rightSum);
}

const tree1 = new TreeNode(
    17,
    new TreeNode(3, new TreeNode(2)),
    new TreeNode(-10, new TreeNode(16), new TreeNode(1, new TreeNode(13)))
);

console.log(havefunwithtree(tree1));

const tree2 = new TreeNode(
    5,
    new TreeNode(4, new TreeNode(-80), new TreeNode(-60)),
    new TreeNode(10, new TreeNode(-90))
);

console.log(havefunwithtree(tree2));