function equalNeighbors(matrix) {
    let pairCount = 0;
    for(let i = 0; i < matrix.length; i++) {
        let innerArr = matrix[i];
        for(let j = 0; j < innerArr.length; j++) {
            if(i - 1 < 0 || j - 1 < 0) {
                continue;
            }

            if(matrix[i][j] === matrix[i-1][j]) {
                pairCount++;
                matrix[i][j] = true;
                matrix[i-1][j] = true;
            }

            if(matrix[i][j] === matrix[i-1][j - 1]) {
                pairCount++;
                matrix[i][j] = true;
                matrix[i][j - 1] = true;
            }
        }
    }

    console.log(pairCount);
}

function solve(matrix) {
    let equalNeighbors = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length - 1; col++) {
            if (matrix[row][col] === matrix[row][col + 1]) {
                equalNeighbors++;
            }
        }
    }
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === matrix[row + 1][col]) {
                equalNeighbors++;
            }
        }
    }
    console.log(equalNeighbors);
}

function equalNeighbors(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];
        for (let j = 0; j < row.length; j++) {
            let col = row[j];
 
            if (i !== arr.length - 1) {
                if (col === row[j + 1]) {
                    counter++;
                }
                if (col === arr[i + 1][j]) {
                    counter++;
                }
            }
            else if (col === row[j + 1] || col === arr[i][j + 1]) {
                counter++;
            }
        }
    }
    console.log(counter);
}

function solve(args) {

    let counter = 0;
  
    for (let index = 0; index < args.length-1; index++) {  
  
      for (let j = 1; j < args[index].length; j++) {   
  
       if(args[index][j] == args[index+1][j]){
  
          counter++;
  
        }
  
        if(args[index][j] == args[index][j - 1]){
  
          counter++;
  
        }
  
      }
  
    }
  
    for (let index = 0; index < args[args.length-1].length; index++) {
  
      if(args[args.length-1][index] == args[args.length-1][index + 1]){
  
        counter++;
  
      }
  
    }
  
    for (let index = 0; index < args.length-1; index++) {
  
      if(args[index][0] == args[index+1][0]){
  
        counter++;
  
      }
  
    }
  
    console.log(counter)
  
    }



equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);

equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']])