function sortingNumbers(arrOfNums) {
    //Sort asc order
    const sortedNums = arrOfNums.sort((numA, numB) => numA - numB);
    const result = [];

    while(sortedNums.length !== 0) {
        //get first
        const firstEl = sortedNums.shift();
        //get last
        const lastEl = sortedNums.pop();
        //add them to result
        result.push(firstEl, lastEl);
    }

    //output the result
    return result;
}

function sortingNumber(input) {
    let sort = input.sort((a, b) => a - b)
    let bigNumbers = (sort.splice(sort.length / 2, sort.length - 1)).reverse()
    let arr = []
 
    for (let i = 0; i < sort.length; i++) {
        arr.push(sort[i], bigNumbers[i])
    }
    
    return arr;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
sortingNumbers([-3, 65, 1, 63, 3, 56, 18, 52, 31, 48])