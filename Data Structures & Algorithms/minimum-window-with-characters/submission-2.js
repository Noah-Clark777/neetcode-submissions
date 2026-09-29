class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let mapt = new Map()
    for(let i = 0; i < t.length; i++){
        mapt.set(t[i],( mapt.get(t[i]) || 0) +1)
    }


    let maps = new Map()
    let have =0
    let need = mapt.size
    let res =''
    let resLength = Infinity
    
    let left = 0
    for(let right = 0; right < s.length; right++){
        maps.set(s[right], ( maps.get(s[right]) || 0) +1)

    if(maps.has(s[right]) && maps.get(s[right]) === mapt.get(s[right])){have++}

while(need === have){

if(right - left +1 < resLength){
resLength = right - left +1
res = s.slice(left, right +1)
}

maps.set(s[left], maps.get(s[left]) -1)

if(mapt.has(s[left]) && maps.get(s[left]) < mapt.get(s[left])){have--}

if(maps.get(s[left]) === 0){maps.delete(s[left])}

left++}
    }
    
    return res
    }
}
