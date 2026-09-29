class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        // calculate area 
        // hight is the min of grouped lengths 
        // widths is the  arr.length  - minHight[i] or the stack. length
        let maxArea =0
        let stack = []

        for (let i =0; i < heights.length; i++){
            let start =i


while(stack.length > 0 && stack[stack.length -1][1] > heights[i]){
    const [index, height] = stack.pop()
    maxArea = Math.max(maxArea, height * (i - index))
    start = index
} 

        stack.push([start,heights[i]])
        }


        for(let [index, height] of stack){
            maxArea = Math.max(maxArea, height * (heights.length - index))
        }
        return maxArea
    }
}
