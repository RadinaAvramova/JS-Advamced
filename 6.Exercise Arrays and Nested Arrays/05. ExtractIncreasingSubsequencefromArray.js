function extractIncreasingSubsequenceFromArray(arr) {
    let biggest = Number.MIN_SAFE_INTEGER;
    const output = [];

    for(let i = 0; i < arr.length; i++) {
        const currElement = arr[i];

        if(currElement >= biggest) {
            output.push(currElement);
            biggest = currElement;
        }
    }

    return output;
}


function extractIncreasingSubsequenceFromArray(arr) {
    let biggest = Number.MIN_SAFE_INTEGER;

    const output = arr.reduce((acc, curr) => {
        if(curr >= biggest) {
            biggest = curr;

            const tempArr = acc;
            tempArr.push(curr);
            return tempArr;
        }

        return acc;
    }, []);

    return output;
}


extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,10,
    12,
    3,
    2,
    24]
    );

extractIncreasingSubsequenceFromArray([1,
    2,
    3,
    4])

extractIncreasingSubsequenceFromArray([20,
    3,
    2,
    15,6,
    1])