class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0)
        let tempTracker = []

        for(let i =0; i < temperatures.length; i++){

            while(tempTracker.length  && temperatures[i] > temperatures[tempTracker[tempTracker.length -1]]){
                let prevIndex = tempTracker.pop()
                res[prevIndex] = i - prevIndex
            }
           
            tempTracker.push(i)
        }
      return res  
    }
}
