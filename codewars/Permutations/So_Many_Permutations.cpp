#include <bits/stdc++.h>
#include <algorithm>

using namespace std;

vector<string> permutations(string s) {
    vector <string> v;
    sort(s.begin(), s.end());
    do {v.push_back(s);}
    while (next_permutation(s.begin(), s.end()));

    return v;
}
