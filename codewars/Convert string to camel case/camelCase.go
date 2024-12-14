package main

import "strings"

func camelCase(s string) string {
	words := strings.Split(strings.Replace(s, "-", "_", -1), "_")
	var result string
	for i, word := range words {
		if i == 0 {
			result += word
		} else {
			result += strings.Title(word)
		}
	}
	return result
}
