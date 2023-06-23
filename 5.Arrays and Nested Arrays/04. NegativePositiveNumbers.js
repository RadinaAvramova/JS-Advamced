function negativePositiveNumbers(arr) {
    const result = [];

    for(let num of arr) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    for(let num of result) {
        console.log(num);
    }
}

function negativePositiveNumbers(arr) {
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            result.unshift(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }

    console.log(result.join('\n'));
}

function printNegativeAndPositiveNumbers(arr) {
    let result = [];
    arr.forEach(num => num < 0 ? result.unshift(num) : result.push(num));
    console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1])