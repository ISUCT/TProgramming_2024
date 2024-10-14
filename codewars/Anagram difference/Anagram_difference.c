#include <stdlib.h>

unsigned anagram_difference(const char *word1, const char *word2) {
    int A[26] = {}, B[26] = {};
    int i = 0;
    while (word1[i] != '\0') {
        A[word1[i] - 'a']++;
        i++;
    }
    i = 0;
    while (word2[i] != '\0') {
        B[word2[i] - 'a']++;
        i++;
    }
    unsigned a = 0;
    for (int i = 0; i < 26; i++) a += abs(A[i] - B[i]);
    return a;
}
