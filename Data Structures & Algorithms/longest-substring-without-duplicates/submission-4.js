class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
// map over the str
//if the map has the new character move the left 
// delete the old left from the map
//track the max total of the map size

let map = new Map()
let left =0;
let size = 0
for(let right= 0; right < s.length; right++){
while(map.has(s[right])){
map.delete(s[left])
left++
}
    map.set(s[right])
size = Math.max(size, right - left +1)
}
return size
    }
}
