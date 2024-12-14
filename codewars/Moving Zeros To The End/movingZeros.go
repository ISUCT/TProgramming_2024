package main

func movingZeros(array []int) []int {
	nonZero := 0
	for i := 0; i < len(array); i++ {
		if array[i] != 0 {
			array[nonZero], array[i] = array[i], array[nonZero]
			nonZero++
		}
	}
	return array
}
