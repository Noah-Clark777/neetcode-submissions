class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // search a sorted array for a given number 
        // find a middle point the compair high or low 
        // split the deck and repeate till nothing left but the answer
        // if no answer return -1

let left = 0
let right = nums.length -1
while (left <= right){
let mid = Math.floor(left + (right-left) / 2)
if(nums[mid]< target){left = mid + 1}
else if (nums[mid] > target){right = mid -1}
else{return mid}
}
return -1
    }
}
