#pragma once
#ifndef TEST_H
#define TEST_H
#include "function.h"
#include <iostream>
#include <math.h>
#include <string>
#include <vector>

class Test {

private:

double precision, actual, expected;
std :: vector <double> Actual, Expected;

public:

Test();
Test(double precision, double actual, double expected);
Test(double precision,
     std :: vector <double> Actual,
     std :: vector <double> Expected);

void evaluate_test(); //single value
void evaluate_Test(); //multiple (vector of) values
};
//non-members functions to help run tests
void try_test(Problem& problem, double expect);
void try_test(Problem& problem, std :: vector <double>& expect);
#endif
