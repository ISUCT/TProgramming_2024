package main

func digitalRoot(number int) int {
	for number >= 10 {
		summ := 0
		for number != 0 {
			summ += number % 10
			number /= 10
		}
		number = summ
	}
	return number
}
