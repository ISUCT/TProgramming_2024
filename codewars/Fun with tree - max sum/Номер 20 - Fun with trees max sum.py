from preloaded import TreeNode

def max_sum(root: TreeNode):
    answer = 0
    if root is None:
        return answer
    answer += root.value
    left_root = max_sum(root.left)
    right_root = max_sum(root.right)
    if left_root == 0 and right_root != 0:
        return answer + right_root
    elif right_root == 0 and left_root != 0:
        return answer + left_root
    return answer + max(left_root, right_root)