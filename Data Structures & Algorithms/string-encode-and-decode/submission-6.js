class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // length of each word 
        // add symble to know where to start decoding 
        //make it all one word \
    if(strs.length ===0) return''
    let newWord = []
    for(let str of strs){
        let code = str.length + '#' + str;
        newWord.push(code)
    }
return newWord.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //find the length 
        // find the symbole 
        //cut out word and add it to array
        let res =[]
        let i =0
       while(i < str.length){
        let j = i
        while( str[j] !== '#'){
            j++
        }
        let length = parseInt(str.slice(i, j))
        let word = str.slice(j+1, j+1 + length)
        res.push(word)
         i = j + 1 + length
       }
       return res
        }


    }

