class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let col = new Map()
        let row = new Map()
        let squares = new Map()

        for (let r = 0; r < 9; r++){
            for (let c = 0; c < 9; c++){
                if (board[r][c] === '.')continue

                const squareKey = `${Math.floor(r/3)},${Math.floor(c/3)}`

                if(row.get(r) && row.get(r).has(board[r][c]) ||
                   col.get(c) && col.get(c).has(board[r][c]) ||
                   squares.get(squareKey) && squares.get(squareKey).has(board[r][c])) {
                    return false
                }

              if(!row.has(r)) row.set(r, new Set()) 
              if(!col.has(c)) col.set(c, new Set())
              if(!squares.has(squareKey)) squares.set(squareKey, new Set())

              row.get(r).add(board[r][c]);
              col.get(c).add(board[r][c]);
              squares.get(squareKey).add(board[r][c])
            }
        }
        return true
    }
}
