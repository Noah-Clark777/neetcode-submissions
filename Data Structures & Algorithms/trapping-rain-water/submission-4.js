class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
// max hight of right and left 
// if the pointer moves bellow that max add it to the total 

let left =0
let right = height.length -1
let maxLeft = height[left]
let maxRight = height[right]
let res = 0
while(left < right){
    if(maxLeft < maxRight){
        left++
        maxLeft= Math.max(maxLeft, height[left])
        res+= maxLeft - height[left]

    }else{right--
    maxRight = Math.max(maxRight, height[right])
        res+= maxRight - height[right]
    }
}
return res
    }
}
























































// let left =0
// let right = height.length -1
// let leftMax =height[left]
// let rightMax = height[right]
// let res = 0

// while (left  <right){
//     if(leftMax < rightMax){
//         left++
//         leftMax = Math.max(leftMax, height[left])
//         res += leftMax - height[left]
//     }else{
//         right--
//         rightMax = Math.max(rightMax, height[right])
//         res += rightMax - height[right]
//     }
// }
// return res