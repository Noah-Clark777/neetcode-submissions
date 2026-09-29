class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // set up stack 
        let stack =[]
    // hash table of all the paires you would need to mach the new closing to its opening partner
      let closeToOpen ={
        ')':'(',
        ']':'[',
        '}':'{'
       }

       for(let c of s){
     // once you start to see closed symbols
     if(closeToOpen[c]){ 
        //if the stack has an item and the last item matches its counter part in the hash
          if(stack.length > 0 && stack[stack.length -1] === closeToOpen[c]){
            // remove the last item
            stack.pop()
        }else{
            // false if they close incorectly 
            return false
        }}else{
// if its an open symbole add to stack
stack.push(c)
        }
    }
    // if you get through every item added to the stack all symbols hadd oposit and its true
    return stack.length === 0
}

}