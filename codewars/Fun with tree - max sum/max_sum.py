from preloaded import TreeNode

def max_sum(root: TreeNode) -> int:
    if root is None:
        return 0

    def dfs(node):
        if node is None:
            return float('-inf')

        if node.left is None and node.right is None:
            return node.value

        left_sum = dfs(node.left)
        right_sum = dfs(node.right)

        return node.value + max(left_sum, right_sum)

    return dfs(root)

root = TreeNode(
    5,
    TreeNode(4, TreeNode(-80), TreeNode(-60)),
    TreeNode(10, TreeNode(-90))
)

print(max_sum(root))
