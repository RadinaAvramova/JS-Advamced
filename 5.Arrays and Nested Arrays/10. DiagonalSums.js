function diagonalSums(input) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = input[0].length - 1;
    input.forEach(array => {
        firstDiagonal += array[firstIndex++];
        secondDiagonal += array[secondIndex--];
    });

    console.log(firstDiagonal + ' ' + secondDiagonal);
}

function diagonalSums(matrix) {
    let innerArr = matrix[0];
    let sumMain = 0;
    let sumSecond = 0;

    for(let i = 0, j = innerArr.length - 1; i < matrix.length; i++, j--) {
        let mainDiagonalElement = matrix[i][i];
        let secondDiagonalElement = matrix[i][j];
        sumMain += mainDiagonalElement;
        sumSecond += secondDiagonalElement;
    }
}

function demo(input) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
 
    for (let i = 0; i < input.length; i++) {
        mainDiagonal += input[i][i];
        secondaryDiagonal += input[i][input.length - 1 - i];
    }
    console.log(mainDiagonal, secondaryDiagonal);
}



diagonalSums([[20, 40],[10, 60]]);
diagonalSums([[3, 5, 17],[-1, 7, 14],[1, -8, 89]])