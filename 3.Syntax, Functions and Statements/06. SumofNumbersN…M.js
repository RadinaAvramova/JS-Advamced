function sumOfNubers(firstNum, endNum) {

    let start = Number(firstNum);
    let stop = Number(endNum);
    let totalSum = 0;

    for (let i = start; i <= stop; i++) {
        totalSum += i;
    }

    console.log(totalSum);
}

function sumAllNumbers(start, end){
    let sum = 0

    for(let number = Number(start); number <= Number(end); number++){
        sum += number
    }

    return sum
}



sumOfNumbersNtoM('1', '5');
sumOfNumbersNtoM('-8', '20');