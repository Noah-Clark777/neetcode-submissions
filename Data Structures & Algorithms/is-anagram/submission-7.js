class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
let strS = s.split('').sort().join('');
let strT = t.split('').sort().join('')
return strT === strS
    }
}
