class TreeNode:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

def max_sum(root: TreeNode) -> int:
    if root is None:
        return 0
    def dfs(node):
        if not node:
            return float('-inf')
        if not node.left and not node.right:
            return node.value
        left_sum = dfs(node.left)
        right_sum = dfs(node.right)
        return node.value + max(left_sum, right_sum)
    return dfs(root)
root = TreeNode(
    5,
    TreeNode(4, TreeNode(-80), TreeNode(-60)),
    TreeNode(10, TreeNode(-90)))
print(max_sum(root))