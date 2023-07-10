function solve(array, startIndex, endIndex) {
    if(Array.isArray(array) == false) {
        return NaN;
    }

    if(startIndex < 0) {
        startIndex = 0;
    }
    if(endIndex > array.length - 1) {
        endIndex = array.length - 1;
    }

    return array
                .slice(startIndex, endIndex + 1)
                .map(Number)
                .reduce((acc, x) => acc + x, 0);
}


function subSum(arr, start, end) {
    if(Array.isArray(arr) == false) {
        return NaN;
    }

    if(arr.find(x => Number.isNaN(Number(x)))) {
        return NaN;
    }


    if(start < 0) {
        start = 0;
    }

    if(end > arr.length - 1) {
        end = arr.length - 1;
    }

    return arr.reduce(x => Number(x)).reduce((a, c, i) => {
        if(i >= start && i <= end){
            a += c;
        }

        return a;
    }, 0);
} 