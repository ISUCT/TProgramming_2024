#include <stddef.h>

void merge_arrays (
	size_t len_a, const int a[len_a],
	size_t len_b, const int b[len_b],
	int merged[len_a + len_b]
) {
    // Let declare sources to copy from.
    const int* sources[2] = { a, b };
    const int lengths[2] = { len_a, len_b };

    int* counts = merged;

    int currentSource = 0;
    
    // We only can mix general part. Can't go out of bounds.
    int mixLimit = len_a < len_b ? len_a : len_b;
    int mixLenght = mixLimit << 1; // Mixes are int pairs.

    while(mixLenght--) {
        *(counts++) = *(sources[currentSource]++);
        currentSource = !currentSource;
    }

    // Finish our copy-pasta!
    // Select source with larger size.
    currentSource = len_b > len_a;
    int copyPastaRemains = lengths[currentSource] - mixLimit;

    while(copyPastaRemains--) {
        *(counts++) = *(sources[currentSource]++);
    }

    // We're ready to go!
}