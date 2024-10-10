package main

import "fmt"

func FindMissingLetter(chars []rune) rune {
	var missingLetter int32
	for i := 0; i < len(chars)-1; i++ {
		if chars[i+1]-chars[i] != 1 {
			missingLetter = chars[i+1] - 1
		}
	}
	return missingLetter
}

func main() {
	slice := []rune{'a', 'b', 'c', 'e'}
	fmt.Print(FindMissingLetter(slice))
}
