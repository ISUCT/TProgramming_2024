package main

func MoveZeros(arr []int) []int {
	nonZero := []int{}
	countZero := 0

	for _, num := range arr {
		if num != 0 {
			nonZero = append(nonZero, num)
		} else {
			countZero++
		}
	}

	for i := 0; i < countZero; i++ {
		nonZero = append(nonZero, 0)
	}

	return nonZero
}
