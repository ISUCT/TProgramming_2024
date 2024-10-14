def sum_pairs(nums: list[int], total: int) -> list[int]:
    seens = set()
    for num in nums:
        if (seen := total - num) in seens:
            return [seen, num]
        seens.add(num)