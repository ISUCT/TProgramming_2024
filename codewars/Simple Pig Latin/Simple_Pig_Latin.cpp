#include <bits/stdc++.h>

using namespace std;

string pig_it(string str) {
    int t = 0;
    string temp, ans;
    for (int i = 0; i < str.size() - 1; i++) {
        if (str[i] == ' ') {
            if (str[t] != '!' && str[t] != '?' && str[t] != '.' && str[t] != ','){
                temp = str.substr(t + 1, i - t - 1) + str[t] + "ay ";
                t = i + 1;
                ans += temp;
            }
            else {
                temp = str.substr(t + 1, i - t - 1) + str[t] + " ";
                t = i + 1;
                ans += temp;
            }
        }
    }
    if (str[t] != '!' && str[t] != '?' && str[t] != '.' && str[t] != ',')
        ans = ans + str.substr(t + 1, str.size() - t - 1) + str[t] + "ay";
    else ans += str[t];
    return ans;
}
