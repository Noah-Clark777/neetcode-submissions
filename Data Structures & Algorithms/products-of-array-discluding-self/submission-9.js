class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
let prefix = 1
let res = []
for (let i=0; i < nums.length; i++){
    res[i] = prefix
    prefix *= nums[i]
}
//////////////////////////////////////////////////////
let sufix = 1
for(let j = nums.length -1; j >=0; j--){
 res[j] *= sufix
 sufix *= nums[j]
}
return res
    }
}
