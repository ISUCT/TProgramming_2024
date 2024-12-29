package main

import (
	"fmt"
	"strings"
)

func ToCamelCase(s string) string {
	if len(s) == 0 {
		return ""
	}
	result := strings.Builder{}
	var nextUpper bool
	result.WriteByte(s[0])
	newS := s[1:]
	for _, v := range []byte(strings.TrimSpace(newS)) {
		if v == ' ' || v == '-' || v == '_' {
			nextUpper = true
			continue
		}
		if nextUpper {
			v = ToUpper(v)
			nextUpper = false
		}
		result.WriteByte(v)
	}
	return result.String()
}

func ToUpper(b byte) byte {
	if b >= 'a' && b <= 'z' {
		return b - 'a' + 'A'
	}
	return b
}

func main() {
	var str string
	fmt.Scan(&str)
	res := ToCamelCase(str)
	fmt.Println(res)
}
