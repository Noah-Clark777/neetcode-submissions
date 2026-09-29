class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
// make sure that all of t is included in the smallest amout of s
//map over t and get counts for everything 
// trake how may of t you have in compaired to what you need depending on mapt.size
// map over s geting its counts too
// match the maps to see if they have the same and increment 
// while need and have are the same check difrence betwenn right and left 
// use the difrence to create a slice out of s and create your response 
// see how small you can make the window befor the need == have condition breaks remember to delete unused letters and move over the pointer
//update the response
//return the response 
let mapt = new Map()
for(let i =0; i < t.length; i++){
    mapt.set(t[i], (mapt.get(t[i]) || 0 )+1)
}

let maps = new Map()
let have =0
let need =mapt.size
let res =''
let resLength = Infinity


let left= 0
for(let right=0; right < s.length; right++){
    maps.set(s[right] , (maps.get(s[right])|| 0 )+1)

if(mapt.has(s[right]) && maps.get(s[right]) === mapt.get(s[right])){have++}

while(have === need ){

 
 if(right - left + 1 < resLength){
    resLength = right- left+1 
    res = s.slice(left, right + 1)
 }
maps.set(s[left], maps.get(s[left]) -1)
if(maps.has(s[left]) && maps.get(s[left]) < mapt.get(s[left])){have--}
if(maps.get(s[left]) ===0){maps.delete(s[left])
}
    left++ 
}
}

return res
    }
}
