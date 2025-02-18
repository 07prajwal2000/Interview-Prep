def isSubsetPresent(n, k, a):
    def find(curSum, idx):
        if curSum == k:
            return True
        if curSum > k or idx >= n:
            return False

        for i in range(idx, n):
            ans = find(curSum + a[i], i + 1)
            if ans:
                return True
        return False

    return find(0, 0)

print(isSubsetPresent(3, 5, [1, 2, 3]))