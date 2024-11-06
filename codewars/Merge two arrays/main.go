package main

func merge(arr1, arr2 []interface{}) []interface{} {
	var result []interface{}
	length1 := len(arr1)
	length2 := len(arr2)
	maxLength := length1
	if length2 > length1 {
		maxLength = length2
	}

	for i := 0; i < maxLength; i++ {
		if i < length1 {
			result = append(result, arr1[i])
		}
		if i < length2 {
			result = append(result, arr2[i])
		}
	}
	return result
}

func main() {
}
