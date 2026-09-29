class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
 let rows = new Map()
 let cols = new Map()
 let squares = new Map()
for(let r =0; r < 9; r++){
for(let c =0; c < 9; c++){
    if(board[r][c] === '.') continue

let squareKey = `${Math.floor(r/3)},${Math.floor(c/3)}`

if(rows.has(r) && rows.get(r).has(board[r][c]) ||
cols.has(c) && cols.get(c).has(board[r][c]) ||
squares.has(squareKey) && squares.get(squareKey).has(board[r][c])){
return false
}

if(!rows.has(r)) rows.set(r, new Set())
if(!cols.has(c)) cols.set(c, new Set())
if(!squares.has(squareKey)) squares.set(squareKey, new Set())

rows.get(r).add(board[r][c])
cols.get(c).add(board[r][c])
squares.get(squareKey).add(board[r][c])
}
}
return true
// create maps for the row, cols, and grid blocks
// iderate through the rows and cols 
// set up square check diving each row and col by 3 to find where it is in the 3 x 3 grid
// set up conditions that mean this is not a valid sudoku
// add new spaces to the maps
// set rows, cols, and grid on the board 
// return true if all conditions are met
}
}






































//  let col = new Map()
//         let row = new Map()
//         let squares = new Map()

//         for (let r = 0; r < 9; r++){
//             for (let c = 0; c < 9; c++){
//                 if (board[r][c] === '.')continue

//                 const squareKey = `${Math.floor(r/3)},${Math.floor(c/3)}`

//                 if(row.get(r) && row.get(r).has(board[r][c]) ||
//                    col.get(c) && col.get(c).has(board[r][c]) ||
//                    squares.get(squareKey) && squares.get(squareKey).has(board[r][c])) {
//                     return false
//                 }

//               if(!row.has(r)) row.set(r, new Set()) 
//               if(!col.has(c)) col.set(c, new Set())
//               if(!squares.has(squareKey)) squares.set(squareKey, new Set())

//               row.get(r).add(board[r][c]);
//               col.get(c).add(board[r][c]);
//               squares.get(squareKey).add(board[r][c])
//             }
//         }
//         return true