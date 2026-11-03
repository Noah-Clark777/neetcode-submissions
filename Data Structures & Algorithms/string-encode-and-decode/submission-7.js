class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
//(5#Hello5#World)
if(strs.length === 0)return ''
let res =[]
for(let str of strs){
let encode = str.length + '#' + str
res.push(encode)
}
return res.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
let res = []
let i =0
while( i < str.length){
    let j = i
    while(str[j] !== '#'){
        j++
    }
let length = parseInt(str.slice(i,j))
let word = str.slice(j+1, j+1 +length)
res.push(word)
i = j + 1 + length
}
return res
}
}









































































//     encode(strs) {
//   if (strs.length === 0){return''}
//   let send = []
//   for (let str of strs){
// send.push(str.length +"#"+ str)
//   }
//   return send.join('')
//     }


//     decode(str) {
//  let res =[]
//  let i =0
//  while(i < str.length){
//     let j = i 
//     while(str[j] !== '#'){
//         j++
//     }
//  let length =  parseInt(str.slice(i,j))
//  let answer = str.slice(j+1, j + 1+ length) 
//  res.push(answer)   
// i = j + 1 + length
//  }
//  return res
