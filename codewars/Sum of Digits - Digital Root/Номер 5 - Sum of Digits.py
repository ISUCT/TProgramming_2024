def digital_root(n):
    answer = 0
    while n > 0:
        answer += n % 10
        n //= 10
    if answer // 10 != 0:
        answer = digital_root(answer)
    return answer
