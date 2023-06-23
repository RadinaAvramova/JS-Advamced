function processOddPositions(arr) {
    return arr.filter((a, i) => i % 2 !== 0)
                .map(x => x * 2)
                .reverse()
                .join(' ');
}

function processOddPositions(arr) {
    let result = arr
                    .filter((x, i) => i % 2 === 1)
                    .map(x => x * 2)
                    .reverse()
                    .join(' ');
    console.log(result);
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3])