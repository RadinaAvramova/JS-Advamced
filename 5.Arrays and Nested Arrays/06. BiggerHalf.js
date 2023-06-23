function biggerHalf(arr) {
    arr.sort((a, b) => a - b);
    const middle = Math.floor(arr.length / 2);
    const result = arr.slice(middle);

    return result;
}

function biggerHalf(arr) {
    let result = [];
    arr.sort((a,b) => a - b);
    let halfLength = Math.ceil(arr.length / 2);
    for(let index = arr.length - 1; index >= arr.length - halfLength; index--) {
        result.push(arr[index]);
    }
    result.reverse();
    return result;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6])