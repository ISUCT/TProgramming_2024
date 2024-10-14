#include <bits/stdc++.h>

using namespace std;

int sum_intervals(vector <pair <int, int>> intervals) {
    sort(intervals.begin(), intervals.end());
    int a = 0, L = intervals[0].first, R = intervals[0].second;
    for (int i = 1; i < intervals.size(); i++) {
        if (intervals[i].first >= R) {
            //a += (R + L - 1)*(R - L) / 2;
            a += R - L;
            L = intervals[i].first;
            R = intervals[i].second;
        }
        else {
            //a += (intervals[i].first + L - 1)*(intervals[i].first - L) / 2;
            a += intervals[i].first - L;
            L = intervals[i].first;
            R = max(R,intervals[i].second);
        }
    }
    //a += (R + L - 1)*(R - L) / 2;
    a += R - L;
    return a;
}
