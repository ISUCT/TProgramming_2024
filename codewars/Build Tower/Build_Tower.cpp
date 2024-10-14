#include <bits/stdc++.h>

using namespace std;

void towerBuilder(unsigned nFloors) {
    vector <string> V(nFloors, "*");
    for (int i = 0; i < nFloors; i++) {
        string a, b;
        for (int j = i; j < nFloors - 1; j++) a += "-";
        for (int k = 0; k < i; k++) b += "*";
    V[i] = a + b + V[i] + b + a;
    cout << V[i] << endl;
    }
}