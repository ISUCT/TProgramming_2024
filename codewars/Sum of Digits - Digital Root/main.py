def digital_root(n):
    n = str(n)
    ans = 0
    for i in n:
        ans += int(i)
    if ans >= 10:
        ans = digital_root(ans)
    return ans