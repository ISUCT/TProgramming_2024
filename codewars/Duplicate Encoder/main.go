package main

import (
	"fmt"
	"strings"
)

func DuplicateEncode(word string) string {
	freqMap := make(map[rune]int)
	for _, char := range strings.ToLower(word) {
		freqMap[char]++
	}
	var finalString strings.Builder
	for _, char := range strings.ToLower(word) {
		if freqMap[char] == 1 {
			finalString.WriteString("(")
		} else {
			finalString.WriteString(")")
		}
	}
	return finalString.String()
}

func main() {
	fmt.Println(DuplicateEncode("Hello"))
}
