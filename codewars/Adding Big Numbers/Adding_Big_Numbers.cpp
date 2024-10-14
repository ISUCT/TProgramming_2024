#include <bits/stdc++.h>

using namespace std;
typedef unsigned long long ull;

string add(const string& a, const string& b) {
    string ans;
    char n = '0', c;
    short int t;
    const int A_size = a.size(), B_size = b.size();
    if (A_size == 0) {
        if (B_size == 0) return "0";
        return b;
    }
    if (B_size == 0) return a;

    for (int i = 1; i <= max(A_size, B_size); i++) {
            t = n + (A_size >= i) * (a[A_size - i] - '0')
                + (B_size >= i) * (b[B_size - i] - '0') - '0';
        c = 48 + t % 10;
        n = 48 + t / 10;
        ans = c + ans;
    }
    if (n != '0') ans = n + ans;
 return ans;
}