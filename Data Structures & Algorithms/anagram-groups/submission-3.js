class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
 let map = new Map()
 for(let str of strs){
  let ana = str.split('').sort().join('');
  if(!map.has(ana)){
    map.set(ana, [])
  }
  map.get(ana).push(str)
 }
return [...map.values()]
}
}