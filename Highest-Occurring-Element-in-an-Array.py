class Solution:
    def countFrequencies(self, n):
        freq={}
        for i in n:
            freq[i]=freq.get(i,0)+1
        max_freq=max(freq.values())   
        a= [i for (i, count) in freq.items() if count==max_freq]
        return max(a)

raw = input().strip()       # "[1,2,2,1,3]"
raw = raw.strip("[]")       # "1,2,2,1,3"
n = list(map(int, raw.split(",")))
print(Solution().countFrequencies(n))

