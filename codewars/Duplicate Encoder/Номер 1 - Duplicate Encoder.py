def duplicate_encode(word):
    word_lower = word.lower()
    count_letter = {}
    answer = ''
    for i in word_lower:
        if i not in count_letter:
            count_letter[i] = word_lower.count(i)
        if count_letter[i] > 1:
            answer += ')'
        else:
            answer += '('
    return answer