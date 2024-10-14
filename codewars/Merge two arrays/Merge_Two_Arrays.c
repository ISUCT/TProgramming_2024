#include <stdio.h>
#include <stdlib.h>
#include <stddef.h>

void merge_arrays (
	size_t len_a, const int a[len_a],
	size_t len_b, const int b[len_b],
	int merged[len_a + len_b]
	) {
	    int i = 0, j = 0;
        while (i + j < len_a + len_b) {
            if (i < len_a) {
                merged[i + j] = a[i];
                i++;
            }
            if (j < len_b) {
                merged[i + j] = b[j];
                j++;
            }
        }
}
