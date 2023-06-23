function orbit([width, height, x, y]) {
  const matrix = new Array(width).fill().map((e) => new Array(height).fill(0));

  for (let row = 0; row < width; row++) {
    for (let col = 0; col < height; col++) {
      matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
    }
  }

  const output = matrix.map((row) => row.join(" ")).join("\n");
  console.log(output);
}

function orbit ([rows, cols, row, col]) {
    let matrix = []
    for (let i = 0; i < rows; i++) {
      let arr = []
      arr.length = cols
      arr.fill(0)
      matrix.push(arr)
    }
  
    for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[r].length; c++) {
        matrix[r][c] = Math.max(Math.abs(c - col) + 1, Math.abs(r - row) + 1)
      }
    }
  
    matrix.forEach(arr => console.log(arr.join(' ')))
  }

  function orbit(input) {
    let rows = input[0];
    let cols = input[1];
    let starRow = input[2];
    let starCol = input[3];
 
    let matrix = [];
    for(let i=0; i<rows; i++) {
        matrix.push([]);
    }
 
    for(let row = 0; row< rows; row++) {
        for(let col=0; col<cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }
 
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}


function orbit(input) {
    let rows = input[0];
    let cols = input[1];
    let starRow = input[2];
    let starCol = input[3];
 
    let matrix = [];
    for(let i=0; i<rows; i++) {
        matrix.push([]);
    }
 
    for(let row = 0; row< rows; row++) {
        for(let col=0; col<cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }
 
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2] );