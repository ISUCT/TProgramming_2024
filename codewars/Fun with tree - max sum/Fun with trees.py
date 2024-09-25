class TreeNode:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

def max_sum(root):
    if root is None:
        return 0
    
    def dfs(node, current_sum):
        if node is None:
            return float('-inf')
        
        current_sum += node.value
        
        if node.left is None and node.right is None:
            return current_sum
        
        left_sum = dfs(node.left, current_sum)
        right_sum = dfs(node.right, current_sum)
        
        return max(left_sum, right_sum)
    
    return dfs(root, 0)
