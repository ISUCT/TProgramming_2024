class TreeNode:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def max_sum(root: TreeNode) -> int:
    if root is None:
        return 0

    if root.left is None and root.right is None:
        return root.value

    left_sum = max_sum(root.left) if root.left else float('-inf')
    right_sum = max_sum(root.right) if root.right else float('-inf')

    return root.value + max(left_sum, right_sum)
