class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map()
        let left = 0
        let res = 0
    for(let right =0; right < s.length; right++){
        while(map.has(s[right])){
        map.delete(s[left])
        left++
        }
        map.set(s[right])
        res = Math.max(res, right - left +1)
    }
return res
    }
}
