class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
let deque =[]
let res =[]
let left =0
for(let right = 0; right < nums.length; right++){
    while(deque.length && deque[0] < left){
        deque.shift()
    }
while(deque.length && nums[deque[deque.length -1]] <= nums[right]){
    deque.pop()
}
deque.push(right)

if(right -left +1 === k){
    res.push(nums[deque[0]])
    left++
}
}
return res
    }
}
