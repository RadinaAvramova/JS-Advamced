function aggregateElements(elements) {
    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 /b);
    aggregate(elements, '', (a, b) => a + b);

    function aggregate(arr, initVal, func) {
        let val = initVal;
        for(let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        console.log(val);
    }
}

let aggregateElements = (array) => {
    let numbersArray = array.map(Number);
 
    let sum = numbersArray.reduce((a, b) => a + b);
    let inverseValuesSum = numbersArray.reduce((a, b) => a + 1 / b, 0);    
    let stringConcat = numbersArray.join('');
 
    console.log(sum);
    console.log(inverseValuesSum);
    console.log(stringConcat);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);