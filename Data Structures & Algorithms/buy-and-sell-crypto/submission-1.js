class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // find the lowest day 
        // find the highest day if any 
        //window starts on lowest 
        // window moves to greatest 

       let total = 0
       let left = 0
       for(let right=0; right < prices.length; right++){
       while(prices[right] < prices[left]){left++}

       total = Math.max(total,  prices[right] - prices[left])

       }
        return total 
    }
}
