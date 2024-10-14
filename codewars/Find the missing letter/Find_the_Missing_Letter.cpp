#include <bits/stdc++.h>

using namespace std;

char findMissingLetter(const vector<char>& chars) {
    for (int i = 1; i < chars.size(); i++) {
        if (chars[i] - chars[i - 1] > 1) return chars[i] - 1;
    }
    return chars[0] - 1;
}
