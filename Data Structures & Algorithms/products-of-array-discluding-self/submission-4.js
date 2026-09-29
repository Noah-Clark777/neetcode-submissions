class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = []
        let prefix = 1
    for (let i =0; i < nums.length; i++){
        arr[i] = prefix 
        prefix *= nums[i]
    }

 
        let suffix =1
    for (let j= nums.length-1; j >=0; j--){
arr[j] *= suffix
suffix *= nums[j]
    }
    return arr
    }
}
