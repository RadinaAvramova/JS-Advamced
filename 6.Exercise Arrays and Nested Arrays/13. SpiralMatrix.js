function spiralMatrix(num1, num2) {
  const matrix = new Array(num1).fill().map(() => new Array(num2).fill(0));
  let x = 0;
  let y = 0;
  let step = 0;

  for (let i = 0; i < num1 ** 2; ) {
    // block 1
    while (y + step < num2) {
      i += 1;
      matrix[x][y] = i;
      y += 1;
    }

    y -= 1;
    x += 1;

    // block 2
    while (x + step < num2) {
      i += 1;
      matrix[x][y] = i;
      x += 1;
    }

    x -= 1;
    y -= 1;

    // block 3
    while (y >= step) {
      i += 1;
      matrix[x][y] = i;
      y -= 1;
    }

    x -= 1;
    y += 1;
    step += 1;

    // block 4
    while (x >= step) {
      i += 1;
      matrix[x][y] = i;
      x -= 1;
    }

    y += 1;
    x += 1;
  }

  for (const row of matrix) {
    console.log(row.join(" "));
  }
}


function printMatrix (rows, cols) {
    let matrix = []
  
    for (let i = 0; i < rows; i++) {
      let arr = []
      arr.length = cols
      arr.fill(0)
      matrix.push(arr)
    }
  
    let direction = 'right'
    let count = 1
    let row = 0
    let col = 0
  
    while (count <= rows * cols) {
      matrix[row][col] = count
  
      if (direction === 'right') {
        if (col < matrix[row].length - 1 && matrix[row][col + 1] === 0) {
          col++
        } else {
          direction = 'down'
          row++
        }
      } else if (direction === 'down') {
        if (row < matrix.length - 1 && matrix[row + 1][col] === 0) {
          row++
        } else {
          direction = 'left'
          col--
        }
      } else if (direction === 'left') {
        if (col > 0 && matrix[row][col - 1] === 0) {
          col--
        } else {
          direction = 'up'
          row--
        }
      } else if (direction === 'up') {
        if (row > 0 && matrix[row - 1][col] === 0) {
          row--
        } else {
          direction = 'right'
          col++
        }
      }
  
      count++
    }
  
    matrix.forEach(arr => console.log(arr.join(' ')))
  }

  function spiralMatrix(row,col){
    let result = [];
    let counter = 1;
    let startCol = 0;
    let endCol = col-1;
    let startRow = 0;
    let endRow = row-1;

    for(let i = 0; i<row; i++){
        result.push([]);
    }

    while(startCol <= endCol && startRow <= endRow){
        for(let i = startCol; i<= endCol; i++){
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for(let i = startRow; i<= endRow; i++){
            result[i][endCol] = counter;
            counter++;
        }
        endCol--;

        for(let i = endCol; i>= startCol; i--){
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for(let i = endRow; i>= startRow; i--){
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    result = result.forEach(row => console.log(row.join(' ')));
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);