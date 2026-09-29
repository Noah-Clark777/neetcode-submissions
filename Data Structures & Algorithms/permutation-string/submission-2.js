class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
if(s1.length > s2.length) return false

        let map1 = new Map()
    for(let i =0; i < s1.length; i++){
        map1.set(s1[i], (map1.get(s1[i]) || 0) +1)
    }
    let map2 = new Map()
    let left = 0
    for(let right =0; right < s2.length; right++){
map2.set(s2[right], (map2.get(s2[right]) || 0) +1)

while(right- left +1 > s1.length){
    map2.set(s2[left], map2.get(s2[left]) -1)
    if(map2.get(s2[left]) === 0){map2.delete(s2[left])}
    left++
}

if(map1.size === map2.size){
    let match = true
for(let[char, count] of map1){
if(map2.get(char) !== count){
    match = false
    break
}
}
    if(match)return true
}

    }
    return false
    }
}
