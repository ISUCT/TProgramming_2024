typedef struct TreeNode {
	int value;
	struct TreeNode *left, *right;
} TreeNode;

static inline int max(int a, int b) {
    return a > b ? a : b;
}

int max_sum(const TreeNode *root) {
    // Recursion is my mother!
    if (root) {
        
        int influence;
        
        if(!root->left) influence = max_sum(root->right);
        else if(!root->right) influence = max_sum(root->left);
        else influence = max(max_sum(root->left), max_sum(root->right));
        
        return root->value + influence;
    }
    else
        return 0; // NULL-tree is not tree at it all!
                  // It has not influence.
}
