class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
let map = new Map()
for (let num of nums){
    map.set(num, (map.get(num)||0 )+1)
}
let arr = [...map].map(([num,freq])=>[parseInt(freq),num])
arr.sort((a,b)=>b[0]-a[0])

return arr.slice(0,k).map(pair => pair[1])
    }
}
