function biggestElement() {

}

function solve(matrix) {
 
    let result = 0;
 
    for (let row = 0; row < matrix.length; row++) {
 
        for (let col = 0; col < matrix[row].length; col++) {
 
            if (matrix[row][col] > result) {
 
                result = matrix[row][col];
            }
        }
    }
 
    return result;
}    

biggestElement([[20, 50, 10],[8, 33, 145]]);
biggestElement([[3, 5, 7, 12],[-1, 4, 33, 2],[8, 3, 0, 4]])