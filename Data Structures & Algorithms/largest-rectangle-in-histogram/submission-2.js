class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
     
    let maxArea = 0
    let stack = []
    for(let i =0; i< heights.length; i++){
        let start = i

        while(stack.length > 0 && stack[stack.length -1][1] > heights[i]){
            const [index, heigth] = stack.pop()
            maxArea = Math.max(maxArea, heigth * (i - index))
            start = index
        }
        stack.push([start,heights[i]])

    }
for(const [index, height] of stack){
        maxArea=Math.max(maxArea, height * (heights.length - index) )

}

    return maxArea
    }
}
