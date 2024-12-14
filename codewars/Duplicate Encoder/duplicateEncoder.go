package main

import "strings"

func duplicateEncoder(word string) string {
	word = strings.ToLower(word)
	counts := make(map[rune]int)
	for _, char := range word {
		counts[char]++
	}
	var result strings.Builder
	for _, char := range word {
		if counts[char] == 1 {
			result.WriteString("(")
		} else {
			result.WriteString(")")
		}
	}
	return result.String()
}
