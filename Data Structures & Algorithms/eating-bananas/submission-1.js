class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
 let left =1
 let right = Math.max(...piles) 
 let res = right

 while(left <= right){
let k = Math.floor((left + right)/2)

let totalTime = 0
for(let p of piles){
    totalTime += Math.ceil(p /k)
}
if (totalTime <= h){
    res = k
    right = k -1
}else {
    left = k +1
}

    }
 return res 
}
}