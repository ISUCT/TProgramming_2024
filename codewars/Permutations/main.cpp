#include <string>
#include <vector>
#include <iostream>
using namespace std;

void recursive_permutations(
        size_t pos, 
        size_t len, 
        int* indices, 
        std::string alphabet,
        char* editableString,
        vector<string>& outResults
        ) {
    if(pos == len) {
        // We should check permutation existance before pushing.
        for(int y = 0; y < outResults.size(); ++y) {
            auto s = outResults[y];
            if(!s.compare(editableString))
                return; // We have intersection. Don't add item.
        }
        
        outResults.push_back(string(editableString, len));
        return;
    }

    size_t itemsWeHave = len - pos;

    size_t currentIndex = -1;
    for(size_t _ = 0; _ < itemsWeHave; ++_) {
WeHaveIntersections:    
        currentIndex++;

        for(size_t prev = 0; prev < pos; ++prev) {
            if(indices[prev] == currentIndex)
                goto WeHaveIntersections;
        }

WeFinishToSearchForIntersections:
        indices[pos] = currentIndex;
        editableString[pos] = alphabet[currentIndex]; 
        recursive_permutations(
                pos + 1, 
                len, 
                indices, 
                alphabet, 
                editableString,
                outResults
                );
    }
}

std::vector<std::string> permutations(std::string s) {
    size_t stringLength = s.length();
    int number[stringLength];
    char editableStr[stringLength + 1];
    editableStr[stringLength] = '\0';

    auto results = vector<string>(/* I'm lazy to precompute capacity */);
    recursive_permutations(
            0, 
            stringLength, 
            number, 
            s,
            editableStr,
            results
            );

    return results;
}