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
      isMine: true,
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

//adding event listeners. one to check for win everytime there is a left click on a cell, and one for every right click
document.addEventListener ("click", checkForWin);
document.addEventListener ("contextmenu", checkForWin);

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

// if a cell has isMine and isMarked properties both true, that is one win condition checked
// otherwise if it is has the isMine false and hidden false is the other win condition checked
// both of these need to be present for win to work
function checkForWin () {
  winCon = 0
  for (i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine === true && board.cells[i].isMarked === true) {
      winCon += 1
    }
    if (board.cells[i].isMine === false && board.cells[i].hidden === false) {
      winCon +=1
    }
    }
    
  if (winCon == board.cells.length) {

  lib.displayMessage('You win!')
    }
  
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