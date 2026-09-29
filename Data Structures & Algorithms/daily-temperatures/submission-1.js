class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
 let res = Array(temperatures.length).fill(0)
 let days = []

 for(let i =0; i < temperatures.length; i++){

while(days.length && temperatures[i] > temperatures[days[days.length -1]] ){

let prevIndex = days.pop()
res[prevIndex] = i - prevIndex

}

    days.push(i)
 }
 return res
    }
}
