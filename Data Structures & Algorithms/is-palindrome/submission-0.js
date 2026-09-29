class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
let cleanStr = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
let left = 0
let right = cleanStr.length -1
while(left < right){
    if (cleanStr[left] === cleanStr[right]){
        left++
        right--
    }
if (cleanStr[left] !== cleanStr[right]){
    return false
}

}
return true
    }
}
