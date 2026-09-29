class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
    let mapT = new Map()
        for(let i =0; i < t.length; i++){
            mapT.set(t[i], (mapT.get(t[i]) ||0 )+1)
        }

     
    let mapS = new Map()
    let have = 0
    let need = mapT.size
    let result= ''
    let resultLength = Infinity

    let left = 0
    for(let right = 0; right < s.length; right ++){
        mapS.set(s[right], (mapS.get(s[right]) || 0) +1)

    if(mapT.has(s[right]) && mapS.get(s[right]) === mapT.get(s[right])){ have++}

        while(need === have){
if(right - left + 1 < resultLength ){
    resultLength = right - left +1
    result = s.slice(left, right +1)
}
mapS.set(s[left], mapS.get(s[left]) - 1)

if(mapS.has(s[left]) && mapS.get(s[left]) < mapT.get(s[left])){have--}

if(mapS.get(s[left])=== 0){mapS.delete(s[left])}
left++
         
 }



}
   return result 
    }

    }

