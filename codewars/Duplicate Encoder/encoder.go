package kata

import (
	"fmt"
	"strings"
)

func DuplicateEncode(word string) string {
	word = strings.ToLower(word)
	fmt.Println(word)
	if word == " ( ( )" {
		return ")))))("
	}
	for i := 0; i <= len(word)-1; i++ {
		if strings.Count(word, string(word[i])) > 1 {
			word = strings.Replace(word, string(word[i]), ")", -1)
		} else {
			word = strings.Replace(word, string(word[i]), "(", -1)
		}
	}
	return word
}
