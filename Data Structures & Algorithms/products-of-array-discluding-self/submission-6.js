class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
// get the prefix = array shifted over to the left 
let prefix = 1
let answer =[]
for(let i=0; i < nums.length; i++){
answer[i] = prefix  
prefix *= nums[i]
}

// get suffix = array shifted over to the right
let suffix = 1
for(let j = nums.length -1; j >= 0; j--){
answer[j] *= suffix
suffix *= nums[j]
}

// multiply position [i] of prefix and suffix together 
return answer
}
}




























































// let arr = new Array(nums.length).fill(1)

// let prefix = 1

// for(let i=0; i < nums.length; i++){
//     arr[i] = prefix
//     prefix *= nums[i]
// }
// let suffix = 1;
// for(let i= nums.length -1; i >= 0; i--){
//     arr[i] *= suffix
//     suffix *= nums[i]
// }
// return arr