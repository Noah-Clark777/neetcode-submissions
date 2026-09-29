class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
if(s1.length > s2.length){return false}

      let mapS1 = new Map()
    for(let i =0; i < s1.length; i++){
        mapS1.set(s1[i], (mapS1.get(s1[i]) || 0) +1)
    }


      let mapS2 = new Map()
      let left = 0
      for(let right= 0; right < s2.length; right++){

        mapS2.set(s2[right], (mapS2.get(s2[right]) || 0 )+1)

        while(right - left +1 > s1.length){
        mapS2.set(s2[left], mapS2.get(s2[left]) -1)
        if(mapS2.get(s2[left]) === 0){mapS2.delete(s2[left])}
            left++
        }
if( mapS1.size === mapS2.size){
    let match = true
     
     for(let [char, count] of mapS1){
        if(mapS2.get(char) !== count){
            match = false
            break
        }
     }
     if(match)  return true
      }
}
return false
    }
}
