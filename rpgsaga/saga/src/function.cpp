#include "function.h"
#include <iostream>
#include <math.h>
//#include <cmath>
#include <string>
#include <vector>

double Problem :: validate_p(double p) {
    if (p > 1) {
        return 1;
    }
    if (p < 0.0001) {
        return 0.0001;
    }
    return p;
}
double Problem :: validate_x(double x) {
    const double p = Problem :: precision;
    double v = x / M_PI;
    //x cannot be Pi+-2Pi*n and 10*Pi*n, where n is integer
    if (std :: abs(v - (int)v) < p &&
    //if (std :: fabs(v - (int)v) < p &&
        ((int)v % 2 != 0 || (int)v % 10 == 0)) {
            return (v - (int)v < 0 ? x - p: x + p);
                //if x is invalid, it is changed to closest valid x
        }
    return x;
}
std :: vector <double> Problem :: validate_x(std :: vector <double> X) {
    for (int i = 0; i < (int)X.size(); i++)
        X[i] = (Problem :: validate_x(X[i]));
    return X;
}
double Problem :: round_up(double v) {
    const double p = Problem :: precision;
    return std :: round(v / p) * p;
        //safer rounding on doubles
}
double Problem :: solve_y(double x) {
    const double p = Problem :: precision,
                 a = Problem :: a,
                 b = Problem :: b;
    return round_up((a + pow(tan(b * x), 2)) /
                (b + pow(tan(M_PI_2 - a * x), 2)));
        //solving the problem itself and rounding up
}
std :: vector <double> Problem :: solve_y(std :: vector <double> X) {
    std :: vector <double> Y;
    for (int i = 0; i < (int)X.size(); i++)
        Y.push_back(Problem :: solve_y(X[i]));
    return Y;
}

//validate all values passed and solve the problem in constructor
Problem :: Problem() {}
Problem :: Problem(double p, double x) :
    precision(validate_p(p)),
    x(validate_x(x)),
    y(solve_y(x)) {}
Problem :: Problem(double p, std :: vector <double> X) :
    precision(validate_p(p)),
    X(validate_x(X)),
    Y(solve_y(X)) {}

double Problem :: pass_p() {
    return Problem :: precision;
}
double Problem :: pass_y() {
    return Problem :: y;
}
std :: vector <double> Problem :: pass_Y() {
    return Problem :: Y;
}
