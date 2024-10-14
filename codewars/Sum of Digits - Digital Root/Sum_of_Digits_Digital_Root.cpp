#include <bits/stdc++.h>

using namespace std;

int digital_root(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    if (sum >= 10) sum = digital_root(sum);
    return sum;
}