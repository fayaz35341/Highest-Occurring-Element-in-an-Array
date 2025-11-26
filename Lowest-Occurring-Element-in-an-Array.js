class Solution {
    mostFrequentElement(nums) {
        let freq = {};
        for (let i of nums) {
            freq[i] = (freq[i] || 0) + 1;
        }
        let max_freq = Math.min(...Object.values(freq));
        let a = [];
        for (let i in freq) {
            if (freq[i] === max_freq) {
                a.push(Number(i));
            }
        }
        return a;
    }
}
const n = [1, 2, 2, 1, 3];
console.log(new Solution().mostFrequentElement(n));
