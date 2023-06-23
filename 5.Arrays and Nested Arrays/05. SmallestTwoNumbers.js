function smallestTwoNumbers() {

}

function printSmallestTwoNumbers(arr) {
    let result = arr.sort((a, b) => a - b).slice(0, 2);
    console.log(result.join(' '));
}

function smallestTwoNumbers(arr) {
    arr.sort((a, b) => a-b);
    let result = arr.slice(0, 2);
    return result.join(' ');
}


function smallestTwoNumbers(arr){   

    arr = arr.sort(function (a,b) {return a - b;})
       return arr[0] + " " + arr[1];
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);