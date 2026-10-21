class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let arr = [...nums1, ...nums2]
        arr.sort((a,b)=> a-b)
        let left = 0 
        let right = arr.length -1

        while (left <= right){
 let mid = Math.floor(left + (right -left) /2)
    // is odd
        if(arr.length % 2 !== 0){
        return arr[mid]
        }else{return (arr[mid]+ arr[mid +1]) /2}
        }
    }
}
