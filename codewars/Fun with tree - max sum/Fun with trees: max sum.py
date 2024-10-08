class TreeNode:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

def max_sum(root):
    # If the root is None, the tree is empty, return 0
    if root is None:
        return 0
    
    # If it's a leaf node, return its value
    if root.left is None and root.right is None:
        return root.value
    
    # Recursively find the maximum sum for the left and right subtrees
    left_sum = max_sum(root.left) if root.left is not None else float('-inf')
    right_sum = max_sum(root.right) if root.right is not None else float('-inf')
    
    # Return the current node's value plus the maximum of the left or right subtree sums
    return root.value + max(left_sum, right_sum)
