#include <bits/stdc++.h>

using namespace std;

vector <int> snail(const vector <vector <int>> &snail_map) {
    int n = snail_map[0].size();
    vector <vector <int> > V (n, vector <int> (n, 0));
    int x = 0, y = 0, d = 0, k = 1;
    int dy[4] = {1, 0, -1, 0};
    int dx[4] = {0, 1, 0, -1};
    for (int i = 0; i < n * n; i++) {
        V[x][y] = k;
        k++;
        if (x + dx[d] < 0 || x + dx[d] >= n ||
            y + dy[d] < 0 || y + dy[d] >= n ||
            V[x + dx[d]][y + dy[d]] != 0) d = (d + 1) % 4;
        x = x + dx[d];
        y = y + dy[d];
    }
    vector <int> ans(n * n);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            ans[V[i][j] - 1] = snail_map[i][j];
        }
    }
    return ans;
}