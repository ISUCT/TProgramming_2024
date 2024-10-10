package main

import "fmt"

func DigitalRoot(n int) int {
	for n > 9 {
		n = sumDigits(n)
	}
	return n
}

func sumDigits(n int) int {
	var sum int
	for n > 0 {
		sum += n % 10
		n = n / 10
	}
	return sum
}

func main() {
	num := DigitalRoot(12345)
	fmt.Print(num)
}
