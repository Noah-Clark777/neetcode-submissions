class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      if(nums.lenght === 0)return false 
      let set = new Set(nums)
      return set.size !== nums.length
    }
}