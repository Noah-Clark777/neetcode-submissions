class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
    for(let token of tokens){
    if('+-*/'.includes(token) && token.length ===1){
let right = stack.pop()
let left  = stack.pop()
if(token === '+'){stack.push(left  + right)}
else if(token === '-'){stack.push(left - right)}
else if(token=== '*'){ stack.push(left * right)}
else{stack.push(Math.trunc(left / right))}
    }
    else{
        stack.push(parseInt(token))
    }
    }
    return stack[0]
    }
}
