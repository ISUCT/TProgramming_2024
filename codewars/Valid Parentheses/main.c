#include <stdbool.h>

bool validParentheses(const char *str_in) {

    int counter = 0;
    while(*str_in != 0) {
      if(*str_in == '(') counter++;
      else if(*str_in == ')') {
        if(counter <= 0)
          return false;
        counter--;
      }
      str_in++;
    }

  return !counter;
}