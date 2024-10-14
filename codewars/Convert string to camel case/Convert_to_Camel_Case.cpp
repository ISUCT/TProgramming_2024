#include <bits/stdc++.h>

using namespace std;

string to_camel_case(string text) {
    string ans;
    for (int i = 0; i < text.size(); i++) {
        if ((text[i] == '-' || text[i] == '_')
            && i < text.size() - 1) {
            if (text[i + 1] >= 97 && text[i + 1] <= 122) {
             ans += text[i + 1] - 32;
            } else ans += text[i + 1];
            i++;
        }
        else ans += text[i];
    }
    return ans;
}