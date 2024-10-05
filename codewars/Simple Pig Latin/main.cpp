#include <bits/stdc++.h>
#include <ostream>
#include <string>
using namespace std;

inline bool checkIfItIsLetter(char c) {
    return c >= 65;
}

inline void appendAy(char carriedSymbol, char** ptrToTop) {
    *((*ptrToTop)++) = carriedSymbol;
    *((*ptrToTop)++) = 'a';
    *((*ptrToTop)++) = 'y';
}

std::string pig_it(std::string str)
{
    char* editableStr = (char*)malloc(
            str.size() * 3 // Mult by 3 cause 'ay' has 2 symbols.
                           // Let assume for simplicity 
                           // that each symbol is word.
            );

    char* editableStrTop = editableStr;

    bool weAreCarryingSymbol = false;
    char symbolToCarry = 0;

    size_t originalStrLen = str.size();

    for(size_t x = 0; x < originalStrLen; ++x) {
        char currentChar = str[x]; 
        if(checkIfItIsLetter(currentChar)) {
            // We're in the word.
            if (weAreCarryingSymbol) {
                // We're in a middle of the word.
                // Just push it.
                *(editableStrTop++) = currentChar;
            }
            else {
                // We're at the start of the word
                // Let take it to move at the end.
                weAreCarryingSymbol = true;
                symbolToCarry = currentChar; 
            }
        }
        else {
            // We're go out of word.
            if(weAreCarryingSymbol) {
                // We just at the word end.
                // Put symbol we carrying.
                appendAy(symbolToCarry, &editableStrTop);
                weAreCarryingSymbol = false;
            }

            *(editableStrTop++) = currentChar; 
        }
    }

    if(weAreCarryingSymbol) {
        // We not finished word yet...
        appendAy(symbolToCarry, &editableStrTop);
    }

    return std::string(editableStr, editableStrTop);
}