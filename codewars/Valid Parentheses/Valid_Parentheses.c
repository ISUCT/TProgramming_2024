#include <stdbool.h>

bool validParentheses(const char *str_in) {
    int p = 0, i = 0;
    bool pr = true;
    while (str_in[i] != '\0') {
        if (str_in[i] == '(') p++;
        if (str_in[i] == ')') p--;
        if (p < 0) {
            pr = false;
            break;
        }
        i++;
    }
    if (p != 0) pr = false;
    return pr;
}
