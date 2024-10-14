#include <bits/stdc++.h>

using namespace std;

string duplicate_encoder(const string& word) {
    string s = word;
    int M[256] = {};
    for (int i = 0; i < s.size(); i++) {
        if (s[i] >= 97 && s[i] <= 122) M[s[i] - 32]++;
        if (s[i] >= 65 && s[i] <= 90) M[s[i] + 32]++;
        M[s[i]]++;
    }
    for (int i = 0; i < s.size(); i++) {
        if (M[s[i]] == 1) s[i] = '(';
        else s[i] = ')';
    }
    return s;
}
