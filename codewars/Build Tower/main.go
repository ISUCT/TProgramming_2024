package main

import "fmt"

func BuildTower(floors int) []string {
	tower := make([]string, floors)

	for i := 0; i < floors; i++ {

		stars := 2*i + 1
		spaces := floors - i - 1

		line := ""

		for j := 0; j < spaces; j++ {
			line += " "
		}

		for j := 0; j < stars; j++ {
			line += "*"
		}

		for j := 0; j < spaces; j++ {
			line += " "
		}
		tower[i] = line
	}
	return tower
}

func main() {
	new := BuildTower(10)

	for _, row := range new {
		fmt.Println(row)
	}
}
