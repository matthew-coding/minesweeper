document.addEventListener('DOMContentLoaded', startGame)
// Define your `board` object here!
var board = {}

// this function needs to generate a board by itself. Each cell needs to have 4 properties, row, col, isMine, and hidden.
// for a simple 3x3 game I need to have row.col of 00, 01, 02, 10, 11, 12, 20, 21, 22
//


//Instead of just typing out the global board object, write a function to create it.
//Each cell will need row, col, isMine, isMarked, and hidden properties.
//You could start by simply setting every isMine to true, but later you'll probably want to have a random number of mines scattered throughout the board.


//create the array within the function?
// how to shorten this code? Maybe have some if statements? if (board.cells[q].row > 3) {board.cells[q].row == 3} ?
function createCellsS () {
  board.cells = []
  for (var q = 0; q < 3; q++) {
    board.cells.push (
      {
        row: 0,
        col: q,
        isMine: Math.random() >= 0.8,
        hidden: true
      })
      board.cells.push (
      {
        row: 1,
        col: q,
        isMine: Math.random() >= 0.8,
        hidden: true
      })
      board.cells.push (
      {
        row: 2,
        col: q,
        isMine: Math.random() >= 0.8,
        hidden: true
       })

}
}

function createCellsM () {
  board.cells = []
  for (var q = 0; q < 4; q++) {
    board.cells.push (
      {
        row: 0,
        col: q,
        isMine: Math.random() >= 0.8,
        hidden: true
      })
      board.cells.push (
      {
        row: 1,
        col: q,
        isMine: Math.random() >= 0.8,
        hidden: true
      })
      board.cells.push (
      {
        row: 2,
        col: q,
        isMine: Math.random() >= 0.8,
        hidden: true
       })
       board.cells.push({
        row: 3,
        col: q,
        isMine: Math.random() >= 0.8,
        hidden: true
       })

}
}

function createCellsL () {
  board.cells = []
  for (var q = 0; q < 5; q++) {
    board.cells.push (
      {
        row: 0,
        col: q,
        isMine: Math.random() >= 0.8,
        hidden: true
      })
      board.cells.push (
      {
        row: 1,
        col: q,
        isMine: Math.random() >= 0.8,
        hidden: true
      })
      board.cells.push (
      {
        row: 2,
        col: q,
        isMine: Math.random() >= 0.8,
        hidden: true
       })
       board.cells.push({
        row: 3,
        col: q,
        isMine: Math.random() >= 0.8,
        hidden: true
       })
       board.cells.push({
        row: 4,
        col: q,
        isMine: Math.random() >= 0.8,
        hidden: true
       })

}
}

createCellsL ()

//write a function for clearing the board for when the buttons are pressed an functional?
let small = document.getElementById("small")
small.onclick = function smallBoard(){
  clearBoard();
  createCellsS()
};


function clearBoard () {
  delete board.cells
}

/*
function for creating a random board
var board = {}
board.cells = []


*/

function startGame () {

  createCellsL ()

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

// this function resets the board when a button is pressed

function resetBoard() {
  document.getElementsByClassName("board")[0].innerHTML = ""
  startGame();
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
  winSound()

    }
  
}

function winSound(url){
  var audio = document.createElement('audio');
  audio.style.display = "none";
  audio.src = "./sounds/defused.mp3";
  audio.autoplay = true;
  audio.onended = function(){
    audio.remove() 
  };
  document.body.appendChild(audio);
}

function loseSound(url){
  var audio = document.createElement('audio');
  audio.style.display = "none";
  audio.src = "./sounds/explosion.mp3";
  audio.autoplay = true;
  audio.onended = function(){
    audio.remove() 
  };
  document.body.appendChild(audio);
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

