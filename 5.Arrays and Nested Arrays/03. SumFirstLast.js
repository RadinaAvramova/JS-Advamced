function sumFirstLast(arr) {
    const first = Number(arr[0]);
    const last = Number(arr[arr.length - 1]);

    return first + last;
}

function sumFirstLast(arr) {
    return Number(arr.pop()) + Number(arr.shift());
}

function sumFirstLast(arr) {
    let first = Number(arr[0]);
    let last = Number(arr[arr.length - 1]);
    console.log(first + last);
}

function solve(arr){
    arr = arr.map(Number);
    console.log(arr[0] + arr[arr.length-1]);
}


sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);
