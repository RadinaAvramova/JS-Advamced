function ticTacToe(input) {
    // helper function to print the matrix
    function printMatrix() {
      for (let row = 0; row < board.length; row++) {
        console.log(board[row].join("\t"));
      }
    }
  
    // board for the game filled with false as a value
    const board = new Array(3).fill().map(() => new Array(3).fill(false));
    let player = "X";
  
    // loop the input
    for (const line of input) {
      // extract matrix coordinates
      const [row, col] = line.split(" ").map((e) => Number(e));
  
      // check if place is already taken
      if (board[row][col] !== false) {
        console.log("This place is already taken. Please choose another!");
        continue;
      }
  
      // set the value of the current player
      board[row][col] = player;
  
      // check for winner
      for (let i = 0; i < 3; i++) {
        if (
          (board[i][0] === player &&
            board[i][1] === player &&
            board[i][2] === player) ||
          (board[0][i] === player &&
            board[1][i] === player &&
            board[2][i] === player)
        ) {
          console.log(`Player ${player} wins!`);
          printMatrix();
          return;
        }
  
        // check for winner
        if (
          (board[0][0] === player &&
            board[1][1] === player &&
            board[2][2] === player) ||
          (board[0][2] === player &&
            board[1][1] === player &&
            board[2][0] === player)
        ) {
          console.log(`Player ${player} wins!`);
          printMatrix();
          return;
        }
  
        // include false flag to determen when game is over
        let includesFalse = false;
  
        for (let row = 0; row < board.length; row++) {
          if (board[row].includes(false)) {
            includesFalse = true;
          }
        }
  
        // check if nobody wins
        if (!includesFalse) {
          console.log("The game ended! Nobody wins :(");
          printMatrix();
          return;
        }
  
        // toggle players 'X' and 'O'
        player = player === "X" ? "O" : "X";
      }
    }
  }

function solve(input) {
    let arr = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let player = 'X';
 
    for (let line of input) {
        [currRow, currCol] = line.split(' ').map(Number);
 
        if (arr[currRow][currCol] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }
 
        arr[currRow][currCol] = player;
 
        //check horizontal and vertical
        for (let i = 0; i < 3; i++) {
            if (
                arr[i][0] === player &&
                arr[i][1] === player &&
                arr[i][2] === player
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            } else if (
                arr[0][i] === player &&
                arr[1][i] === player &&
                arr[2][i] === player
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            }
        }
 
        //check left to right
        if (
            arr[0][0] === player &&
            arr[1][1] === player &&
            arr[2][2] === player
        ) {
            console.log(`Player ${player} wins!`);
            printMatrix();
            return;
        }
 
        //check right to left
        else if (
            arr[0][2] === player &&
            arr[1][1] === player &&
            arr[2][0] === player
        ) {
            console.log(`Player ${player} wins!`);
            printMatrix();
            return;
        }
 
        let theresFalse = false;
 
        for (let row = 0; row < arr.length; row++) {
            if (arr[row].includes(false)) {
                theresFalse = true;
            }
        }
 
        if (!theresFalse) {
            console.log('The game ended! Nobody wins :(');
            printMatrix();
            return;
        }
 
        player = player === 'X' ? 'O' : 'X';
    }
 
    function printMatrix() {
        for (let row = 0; row < arr.length; row++) {
            console.log(arr[row].join('\t'));
        }
    }
}



ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"])

ticTacToe(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"])

ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
)