class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    nums.sort((a,b)=> a -b)
    let res =[]

for (let i=0; i < nums.length; i++){
    if(nums[i] >0) break
    if(nums[i] === nums[i -1])continue

    let left = i + 1
    let right = nums.length -1

while(left < right){
let sum = nums[i] + nums[left] + nums[right]
if(sum > 0){right--}
else if(sum < 0){left++}
else{res.push([nums[i],nums[left],nums[right]])
left++
right--
while(left < right && nums[left] === nums[left -1]){
    left++
}
}
}
}
return res
}
} 




















































// let answer = []
// nums.sort((a,b)=>a -b)

// for(let i =0; i <nums.length; i++){
// if(nums[i] > 0)break
// if(i > 0 && nums[i] === nums[i -1]) continue

// let l = i + 1
// let r = nums.length -1

// while( l <  r){
// let sum = nums[i] + nums[l] + nums[r]
//     if(sum < 0){l++}
//     else if(sum > 0){r--}
//     else{answer.push([nums[i],nums[l],nums[r]])
//     l++
//     r--
// while (l < r & nums[l]===nums[l -1]){
//     l++
// }
// }
// }
// }
// return answer