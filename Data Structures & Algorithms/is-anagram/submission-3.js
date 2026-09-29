class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
let str1 = s.split('').sort().join('')
let str2 = t.split('').sort().join('')
return str2 === str1
}
}
