def test(nums, k):
    current = 0
    for i in range(k):
        current += nums[i]
    ans = current

    for i in range(k, len(nums)): 
        current += nums[i] - nums[i-k]
        ans = max(ans, current)
    return ans/k
print(test([1,12,-5,-6,50,3],4))