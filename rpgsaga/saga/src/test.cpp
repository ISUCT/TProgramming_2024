#include "test.h"
#include <iostream>
#include <math.h>
/*  encountered a bug where abs() is int overloaded despite the signature,
    could be resolved via substitution with fabs() or usage of*/
//#include <cmath>
#include <string>
#include <vector>

Test :: Test() {}
Test :: Test(double precision, double actual, double expected) :
    precision(precision),
    actual(actual),
    expected(expected) {}
Test :: Test(double precision,
            std :: vector <double> Actual,
            std :: vector <double> Expected) :
    precision(precision),
    Actual(Actual),
    Expected(Expected) {}

//reject the answer if difference is greater-equal than precision
void Test :: evaluate_test() {
    //if (std :: abs(Test :: actual - Test :: expected) >= precision)
    if (std :: fabs(Test :: actual - Test :: expected) >= precision)
         throw std :: string {"Test failed!"};
    else std :: cout << std :: string {"Test passed!"} << std :: endl;
}
void Test :: evaluate_Test() {
    std :: vector <double> A = Test :: Actual;
    std :: vector <double> E = Test :: Expected;
    for (int i = 0; i < (int)A.size(); i++) {
        //if (std :: abs(A[i] - E[i]) >= precision)
        if (std :: fabs(A[i] - E[i]) >= precision)
            throw std :: string {"Test failed!"};
    }
    std :: cout << std :: string {"Test passed!"} << std :: endl;
}
//non-members
void try_test(Problem& problem, double expect) {
    std :: cout << std :: string{"running test... "};
    try {
        Test test(problem.pass_p(), problem.pass_y(), expect);
        test.evaluate_test();
    } catch (const std :: string& error_message) {
        std :: cout << error_message <<  std :: endl;
    }
}
void try_test(Problem& problem, std :: vector <double>& expect) {
    std :: cout << std :: string{"running test... "};
    try {
        Test test(problem.pass_p(), problem.pass_Y(), expect);
        test.evaluate_Test();
    } catch (const std :: string& error_message) {
        std :: cout << error_message <<  std :: endl;
    }
}
