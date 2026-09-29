class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
     if (strs.length === 0){return ''}
     let send =[]
     for (let str of strs){
        send.push(str.length + '#' + str)
     }
    
return send.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res =[]
        let i=0
 while( i < str.length){
    let j = i
    while(str[j] !== '#'){
        j++
    }
 let length = parseInt(str.slice(i,j))
 let answer = str.slice(j+1, j +1 + length )
 res.push(answer)
i = j +1 + length
 }
     return res
    }
}
