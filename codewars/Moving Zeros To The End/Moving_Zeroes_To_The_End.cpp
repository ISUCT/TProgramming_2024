#include <bits/stdc++.h>

using namespace std;

vector <int> move_zeroes(const vector <int>& input) {
    vector <int> V;
    int a = 0;
    for (int i = 0; i < input.size(); i++) {
        if (input[i] == 0) a++;
        else V.push_back(input[i]);
    }
    while (a--) V.push_back(0);
    return V;
}