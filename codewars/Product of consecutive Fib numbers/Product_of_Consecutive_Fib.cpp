#include <bits/stdc++.h>

using namespace std;

typedef unsigned long long ull;
class ProdFib
{
    public:
    static vector<ull> productFib(ull prod) {
        ull a = 0, b = 1;
        while (a * b < prod) {
                swap(a, b);
                b += a;
            }
        return {a, b, (a * b == prod ? true : false)};
    }
};
