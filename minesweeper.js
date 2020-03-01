document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 0,
      col: 0,
      isMine: true,
      hidden: true
    },
    {
      row: 0,
      col: 1,
      isMine: false,
      hidden: true
      
    },
    {
      row: 0,
      col: 2,
      isMine: false,
      hidden: true
    },
    {
      row: 1,
      col: 0,
      isMine: false,
      hidden: true
    },
    {
      row: 1,
      col: 1,
      isMine: false,
      hidden: true
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      hidden: true
    },
    {
      row: 2,
      col: 0,
      isMine: false,
      hidden: true
    },
    {
      row: 2,
      col: 1,
      isMine: false,
      hidden: true
    },
    {
      row: 2,
      col: 2,
      isMine: false,
      hidden: true
    }
  ]
}

function startGame () {
  var squares = board.cells
  for (let x = 0; x < squares.length; x++) {
    squares[x].surroundingMines = countSurroundingMines (squares[x]);

  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var total = 0;
  for (y = 0; y < surrounding.length; y++) {
    if (surrounding[y].isMine === true) {
      total++
    }
  }
  return total
}



/* Returns a subset of the `cells` array, including only those cells
// which are adjacent to `row`, `col`
function getSurroundingCells (row, col) {
  var columns = getRange(getLowerBound(col), getUpperBound(col))
  var rows = getRange(getLowerBound(row), getUpperBound(row))
  return result = board.cells
    .filter(function (cell) {
      // Filter out the current cell
      if (cell.row === row && cell.col === col) {
        return false
      }
      // Grab the rest of the adjacent cells
      return columns.includes(cell.col) && rows.includes(cell.row)
    })
}
*/