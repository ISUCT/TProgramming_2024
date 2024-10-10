from preloaded import TreeNode

def max_sum(root: TreeNode) -> int:
    total = 0
    if root is None:
        return total
    total += root.value
    r_root = max_sum(root.right)
    l_root = max_sum(root.left)
    if l_root == 0 and r_root != 0:
        return total + r_root
    elif r_root == 0 and l_root != 0:
        return total + l_root
    return total + max(l_root,r_root)
