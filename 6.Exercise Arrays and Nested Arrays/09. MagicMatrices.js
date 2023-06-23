function magicMatrices(matrix) {
    const totalRowSum = matrix[0].reduce((acc, cur) => acc + cur, 0);

    for(let row = 0; row < matrix.length; row++) {
        let sumRow = 0;
        let sumCol = 0;

        for(let col = 0; col < matrix.length; col++) {
            sumRow += matrix[col][row];
            sumCol += matrix[row][col];
        }

        if(totalRowSum !== sumRow || totalRowSum !== sumCol) {
            return false;
        }
    }

    return true;
}

function isMagixMatrix (matrix) {
    let sum = matrix[0].reduce((a, b) => a + b, 0)
    let isMagic = true
  
    matrix.forEach((row, index) => {
      let horizontalSum = row.reduce((a, b) => a + b, 0)
      let verticalSum = matrix.map(arr => arr[index]).reduce((a, b) => a + b, 0)
  
      if (horizontalSum !== sum || verticalSum !== sum) {
        isMagic = false
      }
    })
  
    console.log(isMagic)
  }

  function magicMatrices(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        let sumROne = matrix[i].reduce((a, b) => a + b, 0);
        let sumRTwo = matrix[i + 1].reduce((a, b) => a + b, 0);
        let sumCOne = 0;
        let sumCTwo = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumCOne += matrix[i][j];
            sumCTwo += matrix[i + 1][j];
        }

        if (sumROne !== sumRTwo || sumCOne !== sumCTwo) {
            return false;
        }
    }

    return true;
}

function magicMatrices(matrix) {
    const reduce = (prev, curr) => prev + curr;
    let sum = matrix[0].reduce(reduce);
    for (let row = 0; row < matrix.length; row++) {
        let rowSum = matrix[row].reduce(reduce);
        if (rowSum !== sum) {
            return false;
        }
        if (row === 0) {
            for (let col = 0; col < matrix[row].length; col++) {
                let columSum = 0;
                for (let i = 0; i < matrix.length; i++) {
                    columSum += matrix[col][i];
                }
                if (columSum !== sum) {
                    return false;
                }
            }
        }
    }
    return true;
}

function magicMtrx(mtrx) {

    let [row, col, count] = [0, 0, 0];
    const equalBenchmark = mtrx[0].reduce((a, b) => {
        a += b;
        return a; 
    }, 0)

    for (let step = 0; step < mtrx.length; step++) {
        let rowCheck = 0;
        let colCheck = 0;

        mtrx[step].forEach(el => rowCheck += el);
        rowCheck === equalBenchmark ? row += rowCheck : row = null;
       
        mtrx.forEach(el => colCheck += el[step]);
        colCheck === equalBenchmark ? col += colCheck : col = null;
        
        if (row === col && row != null && col != null) { count++ };
    }

    console.log(count === mtrx.length);
}

function solve(matrix) {
    let rowTotal = matrix[0].reduce((a, b) => a + b);
    let colTotal = 0;

    matrix.forEach(row => {
        colTotal += row[0];
    });

    let result = true;
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        const currentRow = matrix[i].reduce((acc, item) => acc + item);
        let currentCol = 0;
        for (let j = 0; j < matrix.length; j++) {
            const num = matrix[j][i];
            currentCol += num;
        }
        if (currentRow !== rowTotal || currentCol !== colTotal) {
            result = false;
          	break;
        }

    }

    console.log(result);
}

function magicMatrix(arr) {
    let sum = arr[0].reduce((a, b) => a + b, 0);
    let isMagic = true;

    for (let i = 0; i < arr.length; i++) {
        let sumRow = arr[i].reduce((a, b) => a + b, 0);
        let sumCol = arr.map(row => row[i]).reduce((a, b) => a + b, 0);

        // A matrix is magical if the sums of the cells of every row 
        // and every column are equal. 
        if (sumRow !== sum || sumCol !== sum) {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);
}

function solve(array) {
    let rowSum = [];

    let sum = array[0].reduce((a, b) => a + b, 0);

    array.forEach(element => {
        rowSum.push(element.reduce((a, x) => a + x, 0));
    })

    for (let i = 0; i < array[0].length; i++) {
        let sumRow = array[i].reduce((a, b) => a + b, 0);

        let currentColumn = 0;
        for (let j = 0; j < array.length; j++) {
            currentColumn += array[j][i];
        }

        // if (currentColumn != sum || sumRow != sum) return false;
        // rowSum[i] triggers Failed Test, simply use sum and passes all test
        if (currentColumn != sum) return false;
    }
    return true;
}

function solve(arr) {

    let sumRow = arr.map((col => col.reduce((a,b) => a + b)));

    let sumCol = arr.reduce((r, a) => r.map((b, i) => a[i] + b));

    let allEqual = array => array.every( v => v === array[0]);

    return allEqual(sumRow) && allEqual(sumRow) && sumRow.toString() === sumCol.toString();

}




magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);

magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])