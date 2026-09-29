class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let closetoOpen = {
            ']':'[',
            ')':'(',
            '}':'{'
        }
    let stack = []

for (let c of s ){
    if(closetoOpen[c]){
        if(stack.length > 0 && stack[stack.length -1] === closetoOpen[c]){
            stack.pop()
        }else{
            return false 
        }
    }else {
        stack.push(c)
    }
}
return stack.length === 0
    }
}
