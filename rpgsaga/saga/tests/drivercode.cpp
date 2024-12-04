#include "test.h"
#include <iostream>
#include <math.h>
//#include <cmath>
#include <string>
#include <vector>

int main() {
    //first testing if Problem and Test are working properly
    //testting Problem :: round_up() and Problem :: validate_p()
    std :: cout << std :: string {"calculations are rounded up to precision which is limited to p=[0.0001..1],\notherwise it defaults to closest boundary"} << std :: endl;
    for (double i = 0.00001; i <= 10; i *= 10) {
        Problem problem_p(i, 3);
        std :: cout << std :: string{"tried p: "} << i
                    << std :: string{", ans is "} << problem_p.pass_y()
                    << std :: endl;
    }
    std :: cout << std :: endl;
    //testing Problem :: validate_x()
    std :: cout << std :: string{"invalid x values are slightly modified to run calculations without problem,\nx cannot be Pi+-2Pi*n and 10*Pi*n, where n is integer"} << std :: endl;
    Problem problem_x1(0.0001, 0);
    std :: cout << std :: string{"tried x: 0, ans is "} << problem_x1.pass_y() << std :: endl;
    Problem problem_x2(0.0001, 7 * M_PI);
    std :: cout << std :: string{"tried x: 7*Pi, ans is "} << problem_x2.pass_y() << std :: endl;
    Problem problem_x3(0.0001, 10 * M_PI);
    std :: cout << std :: string{"tried x: 10*Pi, ans is "} << problem_x3.pass_y() << std :: endl;
    Problem problem_x4(0.0001, -6 * M_PI + M_PI);
    std :: cout << std :: string{"tried x: Pi-6*Pi, ans is "} << problem_x4.pass_y() << std :: endl;
    std :: cout << std :: endl;
    //testing Test :: evaluate_test()
    std :: cout << std :: string{"test fails when difference between expected and actual values is greater than (equal to) p"}
                << std :: endl;
    double pt{0.001};
    double expected_t1{0.0068};
    Problem problem_t1(pt, 1.15);
    std :: cout << std :: string{"p: "} << problem_t1.pass_p()
                << std :: string{", expecting: "} <<  expected_t1
                << std :: string{", actual is "} << problem_t1.pass_y()
                << std :: endl;
    try_test(problem_t1, expected_t1);
    double expected_t2{0.008};
    Problem problem_t2(pt, 1.15);
    std :: cout << std :: string{"p: "} << problem_t2.pass_p()
                << std :: string{", expecting: "} <<  expected_t2
                << std :: string{", actual is "} << problem_t2.pass_y()
                << std :: endl;
    try_test(problem_t2, expected_t2);
    std :: cout << std :: endl;
    //now seeing lab results
    //problem A
    double p{0.0001};
    double x_st{0.15}, x_fin{1.37}, x_dif{0.25};
    std :: vector <double> A_data;
    for (double x = x_st; x <= x_fin; x += x_dif) {
        A_data.push_back(x);
    }
    Problem problem_A(p, A_data);
    std :: vector <double> actual_A = problem_A.pass_Y();
    std :: vector <double> expected_A {0, 0.0002, 0.0009, 0.0027, 0.0069};
    //running tests on A
    std :: cout << std :: string{"Problem A answers: "};
    for (int i = 0; i < (int)actual_A.size(); i++)
        std :: cout << actual_A[i] << std :: string {" "};
    std :: cout << std :: endl;
    try_test(problem_A, expected_A);
    std :: cout << std :: endl;
    //problem B
    std :: vector <double> B_data {0.2, 0.3, 0.44, 0.6, 0.56};
    Problem problem_B(p, B_data);
    std :: vector <double> actual_B {problem_B.pass_Y()};
    std :: vector <double> expected_B {0, 0.0001, 0.0003, 0.0007, 0.0006};
    //running tests on B
    std :: cout << std :: string{"Problem B answers: "};
    for (int i = 0; i < (int)actual_B.size(); i++)
        std :: cout << actual_B[i] << std :: string {" "};
    std :: cout << std :: endl;
    try_test(problem_B, expected_B);
    std :: cout << std :: endl;
}
