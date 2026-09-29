class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) { 
    // find the greatest area  width * hight 
    // Math.min(left ,right) = height
    // right - left = width 

    let maxArea = 0
    let left = 0
    let right = heights.length -1

    while(left < right){


let width = right - left 
let height = Math.min(heights[left], heights[right])
let area = width * height
maxArea = Math.max(area, maxArea)

if(heights[left] <= heights[right]){left++}else{right--}

    }
    return maxArea
    }
}


























// // right - left * Math.min(heights(left), heights(right)) = area 
// let maxArea = 0
// let left = 0
// let right = heights.length -1

// while(left < right){

//  maxArea = Math.max(maxArea, ((right - left))* (Math.min(heights[left], heights[right])) )
//  if(heights[left] >= heights[right]){ right--}else{left++}
// }
// return maxArea












