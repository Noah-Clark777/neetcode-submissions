class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // start a window at the smallest value
        // track the gratest total earned amosgest evey posibility

        let left =0
        let total = 0
for(let right=0; right < prices.length; right++){
while(prices[right] < prices[left]){left++}
total = Math.max(total, prices[right] - prices[left])
}
return total
    }
}
