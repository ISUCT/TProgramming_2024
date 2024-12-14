package main

import "strings"

func buildTower(numberOfFloors int) []string {
	tower := make([]string, numberOfFloors)
	for i := 1; i <= numberOfFloors; i++ {
		floor := strings.Repeat(" ", numberOfFloors-i) + strings.Repeat("*", 2*i-1) + strings.Repeat(" ", numberOfFloors-1)
		tower[i-1] = floor
	}
	return tower
}
