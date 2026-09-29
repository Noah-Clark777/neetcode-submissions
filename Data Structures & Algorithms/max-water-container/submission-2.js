class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
// right - left * Math.min(heights(left), heights(right)) = area 
let maxArea = 0
let left = 0
let right = heights.length -1

while(left < right){

 maxArea = Math.max(maxArea, ((right - left))* (Math.min(heights[left], heights[right])) )
 if(heights[left] >= heights[right]){ right--}else{left++}
}
return maxArea 
    }
}
