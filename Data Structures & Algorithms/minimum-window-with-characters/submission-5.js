class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
// make sure that all of t is included in the smallest amout of s
if(t.length > s.length)return""
//map over t and get counts for everything 
let mapT = new Map()
for(let i =0; i < t.length; i++){
    mapT.set(t[i], (mapT.get(t[i]) || 0 ) +1)
}
// trake how many of t you have in compaired to what you need depending on mapt.size
let mapS = new Map()
let have = 0
let need = mapT.size
let res=''
let resLength = Infinity 

let left = 0
// map over s geting its counts too
for (let right = 0; right < s.length; right++){
    mapS.set(s[right], (mapS.get(s[right]) || 0) +1)

// match the maps to see if they have the same and increment 
    if(mapT.has(s[right]) && mapS.get(s[right]) === mapT.get(s[right]) ){have++}

// while need and have are the same check difrence betwenn right and left 
    while(have === need){

if (right - left  + 1 < resLength){
// use the difrence to create a slice out of s and create your response 
    resLength = right - left +1
    res = s.slice(left, right + 1)
}
// see how small you can make the window befor the need == have condition breaks remember to delete unused letters and move over the pointer
mapS.set(s[left], mapS.get(s[left]) -1)
if(mapS.has(s[left]) && mapS.get(s[left]) < mapT.get(s[left])){have--}

if(mapS.get(s[left]) === 0){mapS.delete(s[left])}
    left++
    }
}
//update the response
//return the response 
return res
    }
}
