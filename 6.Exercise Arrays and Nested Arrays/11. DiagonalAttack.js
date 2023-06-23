function diagonalAttack(input) {
  const matrix = input.map((row) => row.split(" ").map((e) => Number(e)));
  let sumFirstDiagonal = 0;
  let sumSecondDiagonal = 0;

  for (let i = 0; i < matrix.length; i++) {
    sumFirstDiagonal += matrix[i][i];
    sumSecondDiagonal += matrix[i][matrix.length - i - 1];
  }

  if (sumFirstDiagonal === sumSecondDiagonal) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (i !== j && i != matrix.length - j - 1) {
          matrix[i][j] = sumFirstDiagonal;
        }
      }
    }
  }

  const result = [];
  // prepare to print
  for (let i = 0; i < matrix.length; i++) {
    result.push(matrix[i].join(" "));
  }

  const output = result.join("\n");
  return output;
}

function diagonalAttack (params) {
    let matrix = params.map(x => x.split(' ').map(Number))
    let leftSum = 0
    let rightSum = 0
    let leftCol = 0
    let rightCol = matrix[0].length - 1
    let coords = []
  
    for (let row = 0; row < matrix.length; row++, leftCol++, rightCol--) {
      leftSum += matrix[row][leftCol]
      rightSum += matrix[row][rightCol]
      coords.push(`row: ${row} col: ${leftCol}`)
      coords.push(`row: ${row} col: ${rightCol}`)
    }
  
    if (leftSum === rightSum) {
      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
          if (!coords.includes(`row: ${row} col: ${col}`)) {
            matrix[row][col] = leftSum
          }
        }
      }
    }
  
    matrix.forEach(arr => console.log(arr.join(' ')))
  }

  function diagonalAttack(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));
 
    let sumFirstDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        sumFirstDiagonal = sumFirstDiagonal + matrix[i][i];
    }
    let sumSecondDiagonal = 0;
    for (let j = 0; j < matrix.length; j++) {
        sumSecondDiagonal = sumSecondDiagonal + matrix[j][matrix.length-1-j];
    }
 
    if (sumFirstDiagonal == sumSecondDiagonal){
        for (let q = 0; q < matrix.length; q++) {
            for (let z = 0; z < matrix.length; z++) {
                if( q != z && q != matrix.length-1-z)  {
                    matrix[q][z] = sumFirstDiagonal;
                }
            }
        }
        printMatrix(matrix);
    }
    else
    {
        printMatrix(matrix);
    }
 
    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '))
        }
    }
}

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);

diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0'])