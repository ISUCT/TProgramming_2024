def find_missing_letter(chars):
    is_upper = chars[0].isupper()
    
    if is_upper:
        alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    else:
        alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    start_index = alphabet.index(chars[0])
    end_index = alphabet.index(chars[-1])
    
    expected_segment = alphabet[start_index:end_index+1]
    
    for expected_char, actual_char in zip(expected_segment, chars):
        if expected_char != actual_char:
            return expected_char
