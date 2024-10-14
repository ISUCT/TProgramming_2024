#include <bits/stdc++.h>

using namespace std;

class Solution {
    public:
    static int maxSum(TreeNode* root) {
        if (!root) return root -> value;
        if (!root -> left) return root -> value + maxSum(root -> right);
        if (!root -> right) return root -> value + maxSum(root -> left);
        return root -> value + max(maxSum(root -> left), maxSum(root -> right));
    }
};
