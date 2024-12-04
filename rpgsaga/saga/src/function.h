#pragma once
#ifndef FUNCTION_H
#define FUNCTION_H
#include <vector>

class Problem {

private:

const double a = 0.1, b = 0.5;
double precision, x, y;
std :: vector <double> X, Y;

double validate_p(double p);
double validate_x(double x);
std :: vector <double> validate_x(std :: vector <double> X);
double round_up(double v);
double solve_y(double x);
std :: vector <double> solve_y(std :: vector <double> X);

public:

Problem();
Problem(double precision, double x);
Problem(double precision, std :: vector <double> X);

double pass_p();
double pass_y();
std :: vector <double> pass_Y();
};

#endif
