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
        int buff[2] = { 0, 0 };
        int buffTop = 0;

        if(root->left) buff[buffTop++] = max_sum(root->left);
        if(root->right) buff[buffTop++] = max_sum(root->right);

        int influence;

        if(buffTop > 1) influence = max(buff[0], buff[1]);
        else influence = buff[0]; // If no leafs -- 0 influence 'coz buff =0, 0

        return root->value + influence;
    }
    else
        return 0; // NULL-tree is not tree at it all!
                  // It has not influence.
}
