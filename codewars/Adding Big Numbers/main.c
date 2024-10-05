#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

// Some essentials.
const char fallbackNum = '0';

static inline int toInt(char c) {
    return c - '0';
}

static inline char toChar(int i) {
    return i + '0';
}

static inline bool digitBack(const char* digitRoot, const char** position) {
    if(*position != &fallbackNum) {
        if(--(*position) < digitRoot) {
            *position = &fallbackNum;
            return true;
        }
        
        return false;
    }
    
    return true;
}

char *add(const char *a, const char *b) {

    // Crap... We don't know lengths of strings....
    // Let get it.
    size_t aLen = strlen(a);
    size_t bLen = strlen(b);

    // We need to allocate result buffer.
    // Let assume that max number length is sum of strings + 1 (for carry).
    size_t digits = aLen + bLen + 1;

    // Assume calloc will set memory piece by 0's.
    char* number = calloc(digits + 2, sizeof(char)); // +1 for \0
                                                     // +1 for temporary carry

    char* numberStart = number + digits;
    *numberStart = '\0';

    // Preparing for sum
    const char* aStart = a + aLen - 1; // To cut \0
    const char* bStart = b + bLen - 1; // To cut \0

    // Where rocket starts...
    bool digitsEnds = false;
    while(1) {
        numberStart--;

        // Sum digits. Don't forget cast chars to integers.
        int sum = toInt(*aStart) + toInt(*bStart);

        // Apply carry.
        sum += *numberStart;

        if(!sum & digitsEnds) {
            numberStart++;
            break;
        }

        int digit = sum % 10;
        int carry = sum / 10;

        // Let write carry.
        // We no need to convert it to char 'cause it's temoprary value.
        *(numberStart - 1) = carry;

        // Let write our digit. Convert it to char before.
        *numberStart = toChar(digit);
        
        digitsEnds = true;
        digitsEnds &= digitBack(a, &aStart);        
        digitsEnds &= digitBack(b, &bStart);
    }

    // Well, we have sum written by ptr. Anyway, it can't be freed properly.
    // We need to create accurate copy of integer.
    size_t resultSize = sizeof(char) * (number + digits - numberStart + 1);
    char* result = malloc(resultSize);
    strcpy(result, numberStart);

    free(number);

    return result;
}

